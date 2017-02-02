export function getMocks() {
  return {
    '/api/test': {
      body: {
        r: "test"
      },
      status: 200
    },
    '/api/test/request': {
      body: {
        r: "test request"
      },
      status: 200
    },
    '/api/test/request/12': {
      body: {
        r: "test request 12"
      },
      status: 200
    }
  };
}