/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        alert('entrou');


        //NOTIFICAÇÃO ---------------

        // navigator.notification.alert(
        //     'You are the winner!', 
        //     function() {
        //         console.log('Ok');
        //     }, 
        //     'Game Over', // title
        //     'Done' // buttonName
        // );

        //BATERIA STATUS ---------------

        //Verificar quantidade de bateria
        // e se esta plugada na energia
        // ainda tem o evento batterycritical e batterylow

        // window.addEventListener("batterystatus", onBatteryStatus, false);
        // function onBatteryStatus(info) {
        //     // Handle the online event
        //     console.log("% da bateria: " + info.level + " Carregando? " + info.isPlugged);
        // }

        //CONTATOS ------------------

        //ultima versao dando pau!

        //DEVICE ----------------

        // console.log('Cordova: ' + device.cordova + ' Plataforma: ' + device.platform);


        //ACCELEROEMETER ------------

        //FUNÇÃO QUE PEGA POSIÇÃO

        // function onSuccess(acceleration) {
        //     alert('Acceleration X: ' + acceleration.x + '\n' +
        //         'Acceleration Y: ' + acceleration.y + '\n' +
        //         'Acceleration Z: ' + acceleration.z + '\n' +
        //         'Timestamp: ' + acceleration.timestamp + '\n');
        // };

        // function onError() {
        //     alert('onError!');
        // };

        // navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);

        //FUNCAO QUE PEGA POR TEMPO 

        // function onSuccess(acceleration) {
        //     alert('Acceleration X: ' + acceleration.x + '\n' +
        //         'Acceleration Y: ' + acceleration.y + '\n' +
        //         'Acceleration Z: ' + acceleration.z + '\n' +
        //         'Timestamp: ' + acceleration.timestamp + '\n');
        // };

        // function onError() {
        //     alert('onError!');
        // };

        // var options = {
        //     frequency: 3000
        // }; // Update every 3 seconds

        // var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);


        //DEVICE ORIETATION -----------

        // function onSuccess(heading) {
        //     alert('Heading: ' + heading.magneticHeading);
        // };

        // function onError(error) {
        //     alert('CompassError: ' + error.code);
        // };

        // navigator.compass.getCurrentHeading(onSuccess, onError);

        //InAppBrowser

        // var ref = window.open('teste.html', '_self', 'location=yes');

        //SPLASHSCREEN
        navigator.splashscreen.show();
        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);

    }
};