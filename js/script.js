$(document).ready(function() {
    $('.select:not(.country_select)').select2();
});

// $(".country_select").select2({
//   templateResult: formatState,
//   templateSelection: formatState,
// });


// Template function which adds CSS flag and displays country name
function flagTemplate(country){
  return $("<span class='flag-icon flag-icon-" + country.id + " '></span><span class='flag-text'>" + country.text + "</span>");
}

// Generate correct URL based on entered search term
function generateUrl(params){
  if(params.term){
    return "https://restcountries.com/v3.1/name/" + params.term;
  } else {
    return "https://restcountries.com/v3.1/all";
  }
}

// Initialise select2 using flagTemplate function for both result and selection
$('.country_select').select2({
  // Set template for results and selection
  templateResult: flagTemplate,
  templateSelection: flagTemplate,
  // Set placeholder text
  placeholder: 'Сountry',
  // Load country list from https://restcountries.com
  ajax: {
    url: generateUrl,
    cache: 250,
    dataType: "json",
    processResults: function(data) {      
      return {
        results: data
          .map(x => ({id: x.cca2.toLowerCase(), text: x.name.common}))
          .sort((a, b) => ('' + a.text).localeCompare(b.text))
      };
    }
  }
});


$(function() {
  $(".accordion-wrap .accordion-section").eq(0).find('.section-sub-menu').addClass('active')
  $(".section-name").click(function(e){
    e.preventDefault();
    $(".section-name").removeClass('active')
    $(this).addClass("active")
    $(".section-sub-menu").removeClass('active')
    $(this).next(".section-sub-menu").addClass('active')
     })
});

$('.click-dots').click(function(){
  $(this).find('.dots-submenu').toggleClass('active')
})

$('.action_btn').click(function(){
  $(this).parent().find('.dots-submenu').toggleClass('active')
})

$('.gumb').click(function(){
    $(this).toggleClass('active')
    $('.header_bottom').slideToggle()
    $('html').toggleClass('hidden')
})

$('.content').hide().eq(0).show();
  $('.accordion_sec').click(function() {
    $('.accordion_sec').removeClass('active')
    $(this).addClass('active')
    $(".content").slideUp();
    $(this).find('.content').slideDown();
    return false;
});

jQuery(function($){
   
   $(".phoneInput").mask("+ 38 (999) 999-99-99");
   $('#number-card').mask('9       9       9       9       9       9       9       9       9       9       9       9');
});

$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});

$(function() {
    $.validator.addMethod("passwordRegex", function(value, element) {
        return this.optional(element) || /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value);
    }, "");
});

function ValidatePassword() {
  var rules = [{
      Pattern: "[A-Z]",
      Target: "UpperCase"
    },
    {
      Pattern: "[a-z]",
      Target: "LowerCase"
    },
    {
      Pattern: "[0-9]",
      Target: "Numbers"
    },
    {
      Pattern: "[!@@#$%^&*]",
      Target: "Symbols"
    }
  ];
  var password = $(this).val();

  $("#Length").removeClass(password.length > 8 ? "glyphicon-remove" : "glyphicon-ok");
  $("#Length").addClass(password.length > 8 ? "glyphicon-ok" : "glyphicon-remove");

  for (var i = 0; i < rules.length; i++) {

    $("#" + rules[i].Target).removeClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-remove" : "glyphicon-ok"); 
    $("#" + rules[i].Target).addClass(new RegExp(rules[i].Pattern).test(password) ? "glyphicon-ok" : "glyphicon-remove");
      }
    }

    $(document).ready(function() {
      $(".password").on('keyup', ValidatePassword)
    });

$(function() {
    $(".form_change_password").validate({
        rules: {
            "email": {
                required: true,
                emailRegex: true,
            },
        },
        messages: {
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
        },
    });
});

$(function() {
    $(".login-form-valid").validate({
        ignore: [],
        rules: {
            "list_serv": {
                required: true,
            },
            "branch_to_work": {
                required: true,
            },
            "user": {
                required: true,
                minlength: 2,
            },
            "password": {
                required: true,
                passwordRegex: true,
            },
        },
        messages: {
            "list_serv": {
                required: "Required field",
            },
            "branch_to_work": {
                required: "Required field",
            },
            "user": {
                required: "Required",
                minlength: "Enter your full name",
            },
            "password": {
                required: "",
                passwordRegex: "",
            },
        },
    });
});

$(function() {
    $(".form-create-account").validate({
        ignore: [],
        rules: {
            "language_preference": {
              required: true,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
            "password": {
                required: true,
                passwordRegex: true,
            },
            "password_confirm": {
              required: true,
              equalTo : '[name="password"]'
            },
            "phone": {
              required: true,
            },
            "last_name": {
              required: true,
              minlength: 3,
            },
            "year": {
              required: true,
            },
            "month": {
              required: true,
            },
            "day": {
              required: true,
            },
            "first_name": {
              required: true,
              minlength: 3,
            },

        },
        messages: {
            "language_preference": {
              required: "Required field",
            },
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "password": {
                required: "",
                passwordRegex: "",
            },
            "password_confirm": {
              required: "Password is reguired",
              equalTo : "Enter the correct password"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "year": {
              required: "Required field",
            },
            "month": {
              required: "Required field",
            },
            "day": {
              required: "Required field",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
        },
    });
});

// $(".select").on('change', function () {
//   $('.form').valid();
// });

$(".select").select2().change(function() {
    $(this).valid();
});

$(document).on('change', '.country_select', function() {
   $(this).valid();
});


$(function() {
    $(".form-user-address").validate({
        ignore: [],
        rules: {
            "address_lookup":{
               required: true, 
            },
            "city":{
               required: true, 
            },
            "apart": {
              required: true,
            },
            "street": {
              required: true,
            },
            "house": {
              required: true,
            },
            "postal": {
              required: true,
            },
            "address": {
              required: true,
            },
            "province": {
              required: true,
            },
            "country": {
              required: true,
            },
        },
        messages: {
            "city": {
              required: "Required field",
            },
            "address_lookup": {
              required: "Required field",
            },
            "apart": {
              required: "Required field",
            },
            "street": {
              required: "Required field",
            },
            "house": {
              required: "Required field",
            },
            "postal": {
              required: "Required field",
            },
            "address": {
              required: "Required field",
            },
            "province": {
              required: "Required field",
            },
            "country": {
              required: "Required field",
            },
        }
    });
});


$(function() {
    $(".form-billing_address").validate({
        ignore: [],
        rules: {
            "address_lookup": {
              required: true,
            },
            "city": {
              required: true,
            },
            "checkbox30": {
              required: true,
            },
            "apart": {
              required: true,
            },
            "street": {
              required: true,
            },
            "house": {
              required: true,
            },
            "postal": {
              required: true,
            },
            "address": {
              required: true,
            },
            "province": {
              required: true,
            },
            "country": {
              required: true,
            },
        },
        messages: {
            "address_lookup": {
              required: "Required field",
            },
            "city": {
              required: "Required field",
            },
            "checkbox30": {
              required: "Required field",
            },
            "apart": {
              required: "Required field",
            },
            "street": {
              required: "Required field",
            },
            "house": {
              required: "Required field",
            },
            "postal": {
              required: "Required field",
            },
            "address": {
              required: "Required field",
            },
            "province": {
              required: "Required field",
            },
            "country": {
              required: "Required field",
            },
        }
    });
});


$(function() {
    $(".form_parcel_details").validate({
        ignore: [],
        rules: {
            "select": {
              required: true,  
            },
            "parcel_weight": {
              required: true,
            },
            "length": {
              required: true,
            },
            "height": {
              required: true,
            },
            "width": {
              required: true,
            },
            "province": {
              required: true,
            },
            "country": {
              required: true,
            },
        },
        messages: {
            "select": {
              required: "Required field",
            },
            "parcel_weight": {
              required: "Required field",
            },
            "length": {
              required: "Required field",
            },
            "height": {
              required: "Required field",
            },
            "width": {
              required: "Required field",
            },
            "postal": {
              required: "Required field",
            },
            "province": {
              required: "Required field",
            },
            "country": {
              required: "Required field",
            },
        }
    });
});


$(function() {
    $(".form_send_form").validate({
        ignore: [],
        rules: {
            "address_lookup": {
              required: true,
            },
            "first_name": {
              required: true,
              minlength: 3,
            },
            "last_name": {
              required: true,
              minlength: 3,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
            "phone": {
              required: true,
            },
            "apart": {
              required: true,
            },
            "street": {
              required: true,
            },
            "house": {
              required: true,
            },
            "postal": {
              required: true,
            },
            "address": {
              required: true,
            },
            "province": {
              required: true,
            },
            "country": {
              required: true,
            },
            "city": {
              required: true,
            },

        },
        messages: {
            "address_lookup": {
              required: "Required field",
            },
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
            "apart": {
              required: "Required field",
            },
            "street": {
              required: "Required field",
            },
            "house": {
              required: "Required field",
            },
            "postal": {
              required: "Required field",
            },
            "address": {
              required: "Required field",
            },
            "province": {
              required: "Required field",
            },
            "country": {
              required: "Required field",
            },
             "city": {
              required: "Required field",
            },
        },
    });
});


$(function() {
    $(".form_deliver_to").validate({
        ignore: [],
        rules: {
            "address_lookup": {
              required: true,
            },
            "first_name": {
              required: true,
              minlength: 3,
            },
            "last_name": {
              required: true,
              minlength: 3,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
            "phone": {
              required: true,
            },
            "apart": {
              required: true,
            },
            "street": {
              required: true,
            },
            "house": {
              required: true,
            },
            "postal": {
              required: true,
            },
            "address": {
              required: true,
            },
            "province": {
              required: true,
            },
            "country": {
              required: true,
            },
            "city": {
              required: true,
            },
        },
        messages: {
            "address_lookup": {
              required: "Required field",
            },
            "email": {
                required: "You must enter a email name",
                emailRegex: "Login format not valid"
            },
            "phone": {
              required: "Required field",
            },
            "last_name": {
              required: "Required field",
              minlength: "Enter your full last name",
            },
            "first_name": {
              required: "Required field",
              minlength: "Enter your full name",
            },
            "apart": {
              required: "Required field",
            },
            "street": {
              required: "Required field",
            },
            "house": {
              required: "Required field",
            },
            "postal": {
              required: "Required field",
            },
            "address": {
              required: "Required field",
            },
            "province": {
              required: "Required field",
            },
            "country": {
              required: "Required field",
            },
             "city": {
              required: "Required field",
            },
        },
    });
});

$( ".datepicker" ).datepicker({
  showOn: "focus",
  dateFormat: "dd/mm/yy",
});

// $('.datepicker').datepicker()

$('.modile-delivery-price .accordion-title').click(function(){
  $(this).next('.modile-delivery-price .accordion .text').toggleClass('active')
});


$('.minus').click( function () {
  let total = $(this).next();
  let amount = $(this).parent().find('input').attr('data-price')
  if (total.val() > 1) {
      total.val(+total.val() - 1);
      total.trigger('change')
  }
});

    // Увеличиваем на 1
$('.plus').click(function () {
  let total = $(this).prev();
  let amount = $(this).parent().find('input').attr('data-price')
  total.val(+total.val() + 1);
  total.trigger('change')
});

$(function () {
    $('.button_filter').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true,
        callbacks: {
        open: function() {
           jQuery('body').addClass('magnificpopupnoscroll');
        },
        close: function() {
           jQuery('body').removeClass('magnificpopupnoscroll');
        },
    },
    });
    $(document).on('click', '.close_popup', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});

// new SimpleBar(document.getElementById('#table_scrollbar'));





