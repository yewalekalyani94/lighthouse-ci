module.exports = {
  ci: {
    collect: {
		  startServerCommand: 'npm run start',
		  numberOfRuns: 5,
          url: ['http://localhost:8080']
    },
	 assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 1}],
        'categories:accessibility': ['error', {minScore: 1}]
      }
    },
    upload: {
       target: 'temporary-public-storage',
    },
  },
};