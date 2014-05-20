(function () {

    require.config({
        paths: {
            jquery: 'bower_components/jquery/dist/jquery',
            bootstrap: 'bower_components/bootstrap/dist/js/bootstrap'
        },
        shim: {
        },
        waitSeconds: 20
    });

    require(['jquery'], function() {

    });


}).call(this);