// ==UserScript==
// @name         Avs final
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Audit for self, to avoid misses in result update
// @author       sugumar
// @match        https://testrail-avsqa.avs.amazon.dev/*
// @grant        none
// ==/UserScript==
(function () {
    var $ = window.jQuery;

    (function () {
        'use strict';
        document.getElementById("addResultSubmit").onclick = function () {
            // 1 is for pass result
            if ($('#addResultStatus').val() === "1") {
                if (!$('#addResultComment').val().trim() && (!$('#addResultVersion').val().trim()) ) {
                    alert("Kindly ensure to add \n1.Comment \n2.Version Id");
                    setTimeout(function () {
                        $('.editChange').first()[0].childNodes[1].onclick();
                    }, 2000);
                    return false;
                } else if (!$('#addResultVersion').val().trim()) {
                    alert("Kindly ensure to Add\nversion ID's");
                    setTimeout(function () {
                        $('.editChange').first()[0].childNodes[1].onclick();
                    }, 2000);
                    return false;
                } else if (!$('#addResultComment').val().trim()) {
                    alert("Kindly ensure to Add\nComment ");
                    setTimeout(function () {
                        $('.editChange').first()[0].childNodes[1].onclick();
                    }, 2000);
                    return false;
                }
                // 5 is for fail
            } else if ($('#addResultStatus').val() === "5") {
                if ((!$('#addResultComment').val().trim()) && (!$('#addResultVersion').val().trim()) && (!$('#addResultDefects').val().trim())) {
                    alert("Kindly ensure to add \n1.Comment \n2.Version Id \n3.Defect ID");
                    setTimeout(function () {
                        $('.editChange').first()[0].childNodes[1].onclick();
                    }, 2000);
                    return false;

                }
                else if (!$('#addResultComment').val().trim() && (!$('#addResultVersion').val().trim())) {
                    alert("Kindly ensure to add \n1.Comment \n2.Version Id");
                    setTimeout(function () {
                        $('.editChange').first()[0].childNodes[1].onclick();
                    }, 2000);
                    return false;
                }
                else if ((!$('#addResultVersion').val().trim()) && (!$('#addResultDefects').val().trim())) {
                    alert("Kindly ensure to Add\nversion ID's");
                    setTimeout(function () {
                        $('.editChange').first()[0].childNodes[1].onclick();
                    }, 2000);
                    return false;
                } else if (!$('#addResultDefects').val().trim() && !$('#addResultComment').val().trim()) {
                    alert("Kindly ensure to Add \n1.Comment \n2.Defect");
                    setTimeout(function () {
                        $('.editChange').first()[0].childNodes[1].onclick();
                    }, 2000);
                    return false;
                }
                else if (!$('#addResultComment').val().trim()) {
                    alert("Kindly ensure to add \n1.Comment");
                    setTimeout(function () {
                        $('.editChange').first()[0].childNodes[1].onclick();
                    }, 2000);
                    return false;
                }
                else if (!$('#addResultVersion').val().trim()) {
                    alert("Kindly ensure to Add\nversion ID's");
                    setTimeout(function () {
                        $('.editChange').first()[0].childNodes[1].onclick();
                    }, 2000);
                    return false;
                } else if (!$('#addResultDefects').val().trim()) {
                    alert("Kindly ensure to Add\nDefect");
                    setTimeout(function () {
                        $('.editChange').first()[0].childNodes[1].onclick();
                    }, 2000);
                    return false;
                }

            }
        };
    })();
})();



