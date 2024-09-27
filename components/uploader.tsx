import * as React from "react";
import Image from "next/image";
import { Cross2Icon, FileTextIcon } from "@radix-ui/react-icons";
import UploadIcon from '@/public/Doctors/Upload icon.svg';
import Dropzone, { type DropzoneProps, type FileRejection } from "react-dropzone";
import { toast } from "sonner";

import { cn, formatBytes } from "@/lib/utils";
import { useControllableState } from "@/hooks/use-controllable-state";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FileUploaderProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: File[];
  onValueChange?: (files: File[]) => void;
  onUpload?: (files: File[]) => Promise<void>;
  progresses?: Record<string, number>;
  accept?: DropzoneProps["accept"];
  maxSize?: DropzoneProps["maxSize"];
  maxFileCount?: DropzoneProps["maxFiles"];
  multiple?: boolean;
  disabled?: boolean;
}

export function FileUploader(props: FileUploaderProps) {
  const {
    value: valueProp,
    onValueChange,
    onUpload,
    progresses,
    accept = { "image/*": [] },
    maxSize = 1024 * 1024 * 2,
    maxFileCount = 1,
    multiple = false,
    disabled = false,
    className,
    ...dropzoneProps
  } = props;

  const [files, setFiles] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
  });

  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const onDrop = React.useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      if (!multiple && maxFileCount === 1 && acceptedFiles.length > 1) {
        toast.error("Cannot upload more than 1 file at a time");
        return;
      }

      if ((files?.length ?? 0) + acceptedFiles.length > maxFileCount) {
        toast.error(`Cannot upload more than ${maxFileCount} files`);
        return;
      }

      const newFiles = acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );

      const updatedFiles = files ? [...files, ...newFiles] : newFiles;
      setFiles(updatedFiles);

      if (rejectedFiles.length > 0) {
        rejectedFiles.forEach(({ file }) => {
          toast.error(`File ${file.name} was rejected`);
        });
      }

      if (onUpload && updatedFiles.length > 0 && updatedFiles.length <= maxFileCount) {
        const target = updatedFiles.length > 0 ? `${updatedFiles.length} files` : `file`;

        toast.promise(onUpload(updatedFiles), {
          loading: `Uploading ${target}...`,
          success: () => {
            setFiles([]);
            return `${target} uploaded`;
          },
          error: `Failed to upload ${target}`,
        });
      }
    },
    [files, maxFileCount, multiple, onUpload, setFiles]
  );

  function onRemove(index: number) {
    if (!files) return;
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onValueChange?.(newFiles);
  }

  React.useEffect(() => {
    return () => {
      if (!files) return;
      files.forEach((file) => {
        if (isFileWithPreview(file)) {
          URL.revokeObjectURL(file.preview);
        }
      });
    };
  }, [files]);

  const isDisabled = disabled || (files?.length ?? 0) >= maxFileCount;

  const handleButtonClick = () => {
    // Simulate a click on the dropzone input to trigger file selection
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="relative flex flex-col gap-6 overflow-hidden">
      <Dropzone
        onDrop={onDrop}
        accept={accept}
        maxSize={maxSize}
        maxFiles={maxFileCount}
        multiple={maxFileCount > 1 || multiple}
        disabled={isDisabled}
        noClick // Prevents automatic opening of file dialog on dropzone click
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <div
            {...getRootProps()}
            className={cn(
              "group relative grid h-[404px] ml-[3rem] w-[862px] mt-3 p-8 cursor-pointer place-items-center rounded-lg border-2 border-dashed border-primary bg-green-50 px-5 py-5 text-center transition-all duration-200 hover:border:primary hover:bg-green-100",
              isDragActive && "border-blue-500 bg-blue-50",
              isDisabled && "pointer-events-none opacity-60",
              className
            )}
            {...dropzoneProps}
          >
            <input {...getInputProps({ refKey: 'ref', ref: inputRef })} /> {/* Link the input to the ref */}
            {isDragActive ? (
              <div className="flex flex-col items-center justify-center gap-2 sm:px-5">
                <UploadIcon className="text-primary w-49 h-49" aria-hidden="true" />
                <p className="text-sm font-medium text-blue-600">Drop the files here</p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 sm:px-5">
                <UploadIcon className="text-gray-400 w-49 h-49" aria-hidden="true" />
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-gray-600">
                    Drag & drop files here, or <span className="text-orange-500">Browse</span>
                  </p>
                  <p className="text-xs text-gray-400">
                    Supported formats: Excel, XLSX, PDF
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </Dropzone>
      {files?.length ? (
  <ScrollArea className="h-auto max-h-[400px] w-[862px] px-3 overflow-y-auto">
    <div className="flex flex-col gap-1">
      {files?.map((file, index) => (
        <FileCard key={index} file={file} onRemove={() => onRemove(index)} progress={progresses?.[file.name]} />
      ))}
    </div>
  </ScrollArea>
) : null}

      <Button
        type="button"
        className="mt-4 bg-primary text-white  w-[862px] ml-[3rem] font-semibold px-6 py-2 gap-2 rounded-lg hover:bg-green-600"
        onClick={handleButtonClick} // Trigger the file input on button click
      >
        IMPORT FILE
      </Button>
    </div>
  );
}

interface FileCardProps {
  file: File;
  onRemove: () => void;
  progress?: number;
}

function FileCard({ file, progress, onRemove }: FileCardProps) {
  return (
    <div className="relative flex items-center gap-2">
      <div className="flex flex-1 gap-2">
        {isFileWithPreview(file) ? <FilePreview file={file} /> : null}
        <div className="flex w-full flex-col gap-1">
          <p className="text-sm font-medium text-gray-600 truncate">{file.name}</p>
          <p className="text-xs text-gray-400">{formatBytes(file.size)}</p>
          {progress ? <Progress value={progress} /> : null}
        </div>
      </div>
      <Button type="button" variant="outline" size="icon" className="w-6 h-6" onClick={onRemove}>
        <Cross2Icon className="w-4 h-4" aria-hidden="true" />
        <span className="sr-only">Remove file</span>
      </Button>
    </div>
  );
}

function isFileWithPreview(file: File): file is File & { preview: string } {
  return "preview" in file && typeof file.preview === "string";
}

interface FilePreviewProps {
  file: File & { preview: string };
}

function FilePreview({ file }: FilePreviewProps) {
  if (file.type.startsWith("image/")) {
    return <Image src={file.preview} alt={file.name} width={48} height={48} className="rounded-md object-cover" />;
  }

  return <FileTextIcon className="text-gray-400 w-6 h-6" aria-hidden="true" />;
}
