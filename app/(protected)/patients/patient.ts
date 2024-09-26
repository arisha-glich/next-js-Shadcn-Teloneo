// @actions/patient.ts

export const addPatientAction = async (data: { firstName: string; lastName: string; email: string; streetAddress: string }) => {
    try {
      const response = await fetch('/api/patients', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });
      
      const result = await response.json();
  
      if (response.ok) {
        return { status: 'success', message: 'Patient added successfully!' };
      } else {
        return { status: 'error', message: result.message || 'Failed to add patient' };
      }
    } catch (error) {
      return { status: 'error', message: 'Something went wrong. Please try again.' };
    }
  };
  