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

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData) => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('subject', data.subject);
    formData.append('message', data.message);
    formData.append('_subject', `New Contact Form Submission: ${data.subject}`);
    formData.append('_captcha', 'false');
    // Remove _next to avoid redirect and handle success in JS instead

    const response = await fetch('https://formsubmit.co/worlddj0@gmail.com', {
      method: 'POST',
      body: formData,
    });

    // FormSubmit returns a redirect response even on success
    // Check if it's a redirect to FormSubmit's success page or if status is ok
    if (response.ok || response.status === 200 || response.redirected) {
      return { success: true };
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { success: false, error: 'Failed to submit. Please try again.' };
  }
};