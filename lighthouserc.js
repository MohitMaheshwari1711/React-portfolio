module.exports = {
    ci: {
      collect: {
        url: ['https://maheshwari-mohit.netlify.app/'],
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'http://localhost:9001',
        token: 'ab266dc7-e0ef-495e-9b48-4288e18fd7eb', // the build token provider by the wizard. Could also use LHCI_TOKEN variable instead
      },
    },
  }