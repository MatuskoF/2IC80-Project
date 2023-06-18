<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="JePPIX PLS">

<link rel="stylesheet" href="/bs-jeppix.css">

<link rel="stylesheet" href="/select2.min.css">

<link rel="stylesheet" href="/custom.css">


<link rel="stylesheet" href="/static/css/datatables.min.css">
<link href="/django-fontawesome.css" rel="stylesheet" media="all">
<link href="/all.min.css" rel="stylesheet" media="all">
<script type="text/javascript" src="/django-fontawesome.js"></script>

<link href="/static/css/jquery.datetimepicker.min.css" rel="stylesheet">
<link href="/static/css/easymde.min.css" rel="stylesheet">



<link rel="shortcut icon" type="image/png" href="/static/img/favicon_116x100.png"/>
<title>JePPIX PLS</title>
</head>
<body>
<nav class="navbar navbar-expand-md bg-primary">
<div class="container-fluid">
<a class="navbar-brand" href="#">JePPIX PLS</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbar1" aria-controls="navbar1" aria-expanded="false"
        aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbar1">


    
<ul class="navbar-nav ms-md-auto">

<li class="nav-item">
<a class="nav-link" href="/login/">
Sign in
</a>
</li>

</ul>
</div>
</div>
</nav>
<div class="container-fluid pb-5">

<div class="row">
<div class="col-2 d-none d-lg-block">
    
</div>
<div class="col-lg-8 d-block">

<div id="wrapper">




<h1>Sign in</h1>

<p>
<!-- '"` --><!-- </textarea></xmp> --></option></form><form data-turbo="false" action="/passwordreset.php" accept-charset="UTF-8" method="post">
If you have lost your password you can <a href="/passwordreset/">request a password reset</a>.

</p>



<form 
    method="post" enctype="multipart/form-data"
    novalidate autocomplete=off
>
<input type="hidden" name="csrfmiddlewaretoken" value="phm8tn6PbtxjlFuqFpOylGBY1wyse7a0EsBmdrldNzTeotXNJIsANwc96j0uICe7">

    
    
    


<table class="table">
<!-- '"` --><!-- </textarea></xmp> --></option></form><form data-turbo="false" action="/login.php" accept-charset="UTF-8" method="post"><input type="hidden" data-csrf="true" name="authenticity_token" value="jPBNSnSqPuI3d2Xk2FquLqH0Y9tDiAWFEgjDo3ohmeaAuOpRMAtGxXiaddLb/vJSU4Z1uqwTEEy93GOZZUPDVQ==" />


<tr>
    <th style="width:25%;"><label for="id_email">Email:</label>&nbsp;
        

        
            <span class="text-danger"> * </span>
        
    </th>
    <td>
        
        <div class=" ">
            <input type="text" name="email" class="form-control" autofocus="autofocus" required id="id_email" />
        </div>
    </td>
</tr>

<tr>
    <th style="width:25%;"><label for="id_password">Password:</label>&nbsp;
        

        
            <span class="text-danger"> * </span>
        
    </th>
    <td>
        
        <div class=" ">
            <div class="input-control password"><input type="password" name="password" class="form-control" required id="id_password" /></div>
        </div>
    </td>
</tr>

</table>

    <button class="btn btn-primary" type="submit">
        Sign in
    </button>

</form>


<p class="font-italic">Fields marked with * are required.</p>



</div>

</div>
<div class="col-2 d-none d-lg-block">
    
</div>
</div>

</div>

<div id="" class="float-start fixed-bottom bg-white p-1">
<div class="float-start">
Deployed version: c31ecc89
</div>
<div class="float-end">
By <a href="/about/">Kolibri Solutions</a> 2019&ndash;2022, PITC 2022&ndash;2023
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
crossorigin="anonymous">
</script>
<script src="/static/js/jquery.min.js"></script>
<script src="/static/js/popper.min.js"></script>

<script src="/static/js/select2.min.js"></script>

<script src="/static/js/datatables.min.js"></script>
<script src="/static/js/jquery.dataTables.yadcf.min.js"></script>
<script src="/static/js/dt_wrapper.js"></script>




<script src="/static/js/php-date-formatter.min.js"></script>
<script src="/static/js/jquery.datetimepicker.full.min.js"></script>

<script src="/static/js/easymde.min.js"></script> 
<script>
let mde_editors = [];  // array of mde editors, to be able to access them afterwards.
$(function () {
    // fix for IE for markdown editor polyfills:
    if (window.navigator.userAgent.indexOf('Trident/') > -1) {
        var script = document.createElement("script");  // create a script DOM node
        script.src = '/static/js/polyfill.min.js';
        document.head.appendChild(script);
    }

    $('.markdown-tag-enable').each(function (i, obj) {
        mde_editors[i] = new EasyMDE({
            element: obj,
            autoDownloadFontAwesome: false,
            spellChecker: false,
            toolbar: ['bold', 'italic', 'heading', '|', 'code', 'unordered-list', 'ordered-list', 'link', '|', 'preview', 'side-by-side', 'fullscreen', '|', 'guide'],
        });
    });

    $(".select2-tag-enable").select2({
        minimumResultsForSearch: 6,
        width: '100%',
        // to show colors on labels
        templateResult: function colorTemplate(item) {
            if (!item.id || !item['element'].getAttribute('data-color')) {  // for non-dropdown items, like 'searching...'.
                return item.text;
            }
            return $('<i class="fas fa-circle" style="color:' + item['element'].getAttribute('data-color') + '"> </i> <span>' + item.text + '</span>');
        },
        templateSelection: function colorTemplate(item) {
            if (!item.id || !item['element'].getAttribute('data-color')) {  // for non-dropdown items, like 'searching...'.
                return item.text;
            }
            return $('<i class="fas fa-circle" style="color:' + item['element'].getAttribute('data-color') + '"> </i> <span>' + item.text + '</span>');
        }
    });
    $.datetimepicker.setLocale('en');
    $('.bootstrap-time-picker-widget').datetimepicker({
        datepicker: false,
        format: 'H:i',
        step: 5,
        scrollTime: false,
        scrollInput: false,
    });
    $('.bootstrap-date-time-picker-widget').datetimepicker({
        format: 'Y-m-d H:i',
        step: 30,
        scrollMonth: false,
        scrollTime: false,
        scrollInput: false,
        dayOfWeekStart: 1,
        
            minDate: '-1970-01-02',
        

    });
    $('.bootstrap-date-picker-widget').datetimepicker({
        timepicker: false,
        format: 'Y-m-d',
        scrollMonth: false,
        scrollInput: false,
        dayOfWeekStart: 1,
        
            minDate: '-1970-01-02', // yesterday
        
    });
});
</script>

</body>
</html>
