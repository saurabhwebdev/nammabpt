export const submitSubscription = async (email: string, source: string) => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('_subject', `New Fretso Subscription from ${source}`);
    formData.append('_captcha', 'false');
    formData.append('source', source);

    const response = await fetch('https://formsubmit.co/worlddj0@gmail.com', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, error: 'Failed to submit. Please try again.' };
  }
};