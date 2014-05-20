(function () {

    require.config({
        paths: {
            jquery: 'bower_components/jquery/dist/jquery',
            bootstrap: 'bower_components/bootstrap/dist/js/bootstrap'
        },
        shim: {
            bootstrap: {
                deps: ['jquery']
            }
        },
        waitSeconds: 20
    });

    require(['bootstrap'], function () {

        $(document).ready(function () {
            console.log("Hello, World!");
        });

    });


}).call(this);