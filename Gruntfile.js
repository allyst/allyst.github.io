module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
          files: ['Gruntfile.js', 'src/js/**/*.js'],
          options: {
            globals: {
              jQuery: true
            }
          }
        },

        browserify: {
            js: {
                options: {
                    browserifyOptions: {
                        debug: false
                    }
                },
                src: 'src/js/main.js',
                dest: 'build/main.js'
            }
        },

        uglify: {
            allyst: {
                files: {
                    'build/main.min.js': 'build/main.js'
                }
            }
        },

        less: {
            development: {
                files: {
                    'build/styles.css': 'src/styles/main.less'
                }
            }
        },

        cssmin: {
            allyst: {
                src: 'build/styles.css',
                dest: 'build/styles.min.css'
            }
        },

        watch: {
            files: ['src/js/**/*.js', 'src/styles/**/*.less'],
            tasks: ['default']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask('default', ['less', 'cssmin', 'browserify', 'uglify', 'watch']);

};