module.exports = {
  async rewrites() {
    return [
      {
        source: '/metrics',
        destination: '/api/metrics',
      },
    ];
  },
};
