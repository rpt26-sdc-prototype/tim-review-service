module.exports = function (grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('aws-keys.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>'
      },
      dist: {
        options: {
          bucket: '<%= aws.AWSBucketName %>'
        },
        files: [
          {
            expand: true,
            cwd: 'build/',
            src: [ 'bundle.js' ],
            dest: '/'
          }
        ]
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/bundle.js': ['build/app.js']
        }
      }
    },
		browserify: {
			dev: {
				files: {
					'build/app.js': ['client/index.jsx']
				},
				options: {
					transform: [
						'babelify', 'reactify'
					]
				},
			}
		}
	});

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-aws-s3');

	grunt.registerTask('build', 'browserify');
  grunt.registerTask('uglifyCompressTheCode', 'uglify');
  grunt.registerTask( 'bucketDeploy', 'aws_s3:dist' );

  grunt.registerTask( 'deploy', ['build', 'uglifyCompressTheCode', 'bucketDeploy'] );
};
