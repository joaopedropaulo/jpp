import axios from 'axios';

export const generateResume = (template, payload, url) => {
  try {
    const formData = new FormData();
    formData.append('template', template);
    formData.append('input', payload);

    const config = {
      headers: {
        'Content-Type': 'multipart/formdata',
      },
      responseType: 'blob',
    };
    axios.post(url, formData, config).then((response) => {
      let url = window.URL.createObjectURL(new Blob([response.data]));
      let a = document.createElement('a');
      let timestamp = new Date();
      a.href = url;
      a.download = 'generated_resume_' + timestamp.toISOString() + '.pdf';
      a.click();
    });
  } catch (e) {
    console.err(e);
  }
};
