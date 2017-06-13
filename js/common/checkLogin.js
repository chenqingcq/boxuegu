define([
    'jquery', 'cookie'
], function ($) {
    'use strict';
    var tc_name = $.cookie("tc_name");
    if (!tc_name) {
        location.href = 'login.html';
    }
});