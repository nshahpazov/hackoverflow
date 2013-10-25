module.exports = function(grunt) {
    grunt.initConfig({
        jade:{
            app: {                                                                    
                options: {                                                              
                    amd: true,                                                           
                    client: true,                                                          
                    namespace: false                                                      
                },                                                                       
                expand: true,                                                            
                cwd: 'templates',                                                    
                src: ['**/*.jade'],                                                      
                dest: 'public/scripts/templates',                                            
                ext: '.js'                                                              
            }
        }
    });

    //Load Tasks
    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.registerTask('build', 'jade');
    grunt.registerTask('dev', 'build');

    grunt.registerTask('default', ['jade']);
};