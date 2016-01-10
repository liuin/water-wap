// Init App
var myApp = new Framework7({
    modalTitle: 'Framework7',
    // Enable Material theme
    material: true,
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
});
// Add another view, which is in right panel
var rightView = myApp.addView('.view-right', {
});

// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) {
    myApp.showIndicator();
});





$$(document).on('ajaxComplete', function () {
    myApp.hideIndicator();
});

// Callbacks for specific pages when it initialized
/* ===== Modals Page events  ===== */
myApp.onPageInit('modals', function (page) {
    $$('.demo-alert').on('click', function () {
        myApp.alert('Hello!');
    });
    $$('.demo-confirm').on('click', function () {
        myApp.confirm('Are you feel good today?', function () {
            myApp.alert('Great!');
        });
    });
    $$('.demo-prompt').on('click', function () {
        myApp.prompt('What is your name?', function (data) {
            // @data contains input value
            myApp.confirm('Are you sure that your name is ' + data + '?', function () {
                myApp.alert('Ok, your name is ' + data + ' ;)');
            });
        });
    });
    $$('.demo-login').on('click', function () {
        myApp.modalLogin('Enter your username and password', function (username, password) {
            myApp.alert('Thank you! Username: ' + username + ', password: ' + password);
        });
    });
    $$('.demo-password').on('click', function () {
        myApp.modalPassword('Enter your password', function (password) {
            myApp.alert('Thank you! Password: ' + password);
        });
    });
    $$('.demo-modals-stack').on('click', function () {
        // Open 5 alerts
        myApp.alert('Alert 1');
        myApp.alert('Alert 2');
        myApp.alert('Alert 3');
        myApp.alert('Alert 4');
        myApp.alert('Alert 5');
    });
    $$('.demo-picker-modal').on('click', function () {
        myApp.pickerModal('.picker-modal-demo');
    });
});

/* ===== Preloader Page events ===== */
myApp.onPageInit('preloader', function (page) {
    $$('.demo-indicator').on('click', function () {
        myApp.showIndicator();
        setTimeout(function () {
            myApp.hideIndicator();
        }, 2000);
    });
    $$('.demo-preloader').on('click', function () {
        myApp.showPreloader();
        setTimeout(function () {
            myApp.hidePreloader();
        }, 2000);
    });
    $$('.demo-preloader-custom').on('click', function () {
        myApp.showPreloader('My text...');
        setTimeout(function () {
            myApp.hidePreloader();
        }, 2000);
    });
});

/* ===== Swipe to delete events callback demo ===== */
myApp.onPageInit('swipe-delete', function (page) {
    $$('.demo-remove-callback').on('deleted', function () {
        myApp.alert('Thanks, item removed!');
    });
});
myApp.onPageInit('swipe-delete media-lists', function (page) {
    $$('.demo-reply').on('click', function () {
        myApp.alert('Reply');
    });
    $$('.demo-mark').on('click', function () {
        myApp.alert('Mark');
    });
    $$('.demo-forward').on('click', function () {
        myApp.alert('Forward');
    });
});


/* ===== Action sheet, we use it on few pages ===== */
myApp.onPageInit('swipe-delete modals media-lists', function (page) {
    var actionSheetButtons = [
        // First buttons group
        [
            // Group Label
            {
                text: 'Choose some action',
                label: true
            },
            // First button
            {
                text: 'Alert',
                onClick: function () {
                    myApp.alert('He Hoou!');
                }
            },
            // Second button
            {
                text: 'Second Alert',
                onClick: function () {
                    myApp.alert('Second Alert!');
                }
            },
            // Another red button
            {
                text: 'Nice Red Button ',
                color: 'red',
                onClick: function () {
                    myApp.alert('You have clicked red button!');
                }
            },
        ],
        // Second group
        [
            {
                text: 'Cancel'
            }
        ]
    ];
    $$('.demo-actions').on('click', function (e) {
        myApp.actions(actionSheetButtons);
    });
    $$('.demo-actions-popover').on('click', function (e) {
        // We need to pass additional target parameter (this) for popover
        myApp.actions(this, actionSheetButtons);
    });
    
});

/* ===== Messages Page ===== */
myApp.onPageInit('messages', function (page) {
    var conversationStarted = false;
    var answers = [
        'Yes!',
        'No',
        'Hm...',
        'I am not sure',
        'And what about you?',
        'May be ;)',
        'Lorem ipsum dolor sit amet, consectetur',
        'What?',
        'Are you sure?',
        'Of course',
        'Need to think about it',
        'Amazing!!!',
    ];
    var people = [
        {
            name: 'Kate Johnson',
            avatar: 'http://lorempixel.com/output/people-q-c-100-100-9.jpg'
        },
        {
            name: 'Blue Ninja',
            avatar: 'http://lorempixel.com/output/people-q-c-100-100-7.jpg'
        },
        
    ];
    var answerTimeout, isFocused;

    // Initialize Messages
    var myMessages = myApp.messages('.messages');

    // Initialize Messagebar
    var myMessagebar = myApp.messagebar('.messagebar');
    
    $$('.messagebar a.send-message').on('touchstart mousedown', function () {
        isFocused = document.activeElement && document.activeElement === myMessagebar.textarea[0];
    });
    $$('.messagebar a.send-message').on('click', function (e) {
        // Keep focused messagebar's textarea if it was in focus before
        if (isFocused) {
            e.preventDefault();
            myMessagebar.textarea[0].focus();
        }
        var messageText = myMessagebar.value();
        if (messageText.length === 0) {
            return;
        }
        // Clear messagebar
        myMessagebar.clear();

        // Add Message
        myMessages.addMessage({
            text: messageText,
            avatar: 'http://lorempixel.com/output/people-q-c-200-200-6.jpg',
            type: 'sent',
            date: 'Now'
        });
        conversationStarted = true;
        // Add answer after timeout
        if (answerTimeout) clearTimeout(answerTimeout);
        answerTimeout = setTimeout(function () {
            var answerText = answers[Math.floor(Math.random() * answers.length)];
            var person = people[Math.floor(Math.random() * people.length)];
            myMessages.addMessage({
                text: answers[Math.floor(Math.random() * answers.length)],
                type: 'received',
                name: person.name,
                avatar: person.avatar,
                date: 'Just now'
            });
        }, 2000);
    });
});

/* ===== Pull To Refresh Demo ===== */
myApp.onPageInit('pull-to-refresh', function (page) {
    // Dummy Content
    var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
    var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];
    // Pull to refresh content
    var ptrContent = $$(page.container).find('.pull-to-refresh-content');
    // Add 'refresh' listener on it
    ptrContent.on('refresh', function (e) {
        // Emulate 2s loading
        setTimeout(function () {
            var picURL = 'http://lorempixel.com/88/88/abstract/' + Math.round(Math.random() * 10);
            var song = songs[Math.floor(Math.random() * songs.length)];
            var author = authors[Math.floor(Math.random() * authors.length)];
            var linkHTML = '<li class="item-content">' +
                                '<div class="item-media"><img src="' + picURL + '" width="44"/></div>' +
                                '<div class="item-inner">' +
                                    '<div class="item-title-row">' +
                                        '<div class="item-title">' + song + '</div>' +
                                    '</div>' +
                                    '<div class="item-subtitle">' + author + '</div>' +
                                '</div>' +
                            '</li>';
            ptrContent.find('ul').prepend(linkHTML);
            // When loading done, we need to "close" it
            myApp.pullToRefreshDone();
        }, 2000);
    });
});

/* ===== Sortable page ===== */
myApp.onPageInit('sortable-list', function (page) {
    // Sortable toggler
    $$('.list-block.sortable').on('open', function () {
        $$('.toggle-sortable').text('Done');
    });
    $$('.list-block.sortable').on('close', function () {
        $$('.toggle-sortable').text('Edit');
    });
});

/* ===== Photo Browser Examples ===== */
// Create photoprobsers first:
var photoBrowserPhotos = [
	{
		url: 'http://i1.s1.dpfile.com/pc/ge/39cb0a22ab059a60c67125c86b4c7222(240c180)/thumb.jpg'
		//caption: 'Amazing beach in Goa, India'
	},
    'http://i2.s1.dpfile.com/pc/ge/bdbd05765a24778934d49d1dca03ee04(240c180)/thumb.jpg',
    {
        url: 'http://i1.s1.dpfile.com/pc/ge/7e0b0bc48fee263ff724c8b9dab70913(240c180)/thumb.jpg'
    }
    
];



var photoBrowserStandalone = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    ofText:'/'
});
var photoBrowserPopup = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    type: 'popup'
});
var photoBrowserPage = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    type: 'page'
});
var photoBrowserDark = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    theme: 'dark'
});
var photoBrowserPopupDark = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    theme: 'dark',
    type: 'popup'
});
var photoBrowserLazy = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    lazyLoading: true,
    theme: 'dark'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.ks-pb-standalone').on('click', function () {
        photoBrowserStandalone.open();
    });
    $$('.ks-pb-popup').on('click', function () {
        photoBrowserPopup.open();
    });
    $$('.ks-pb-page').on('click', function () {
        photoBrowserPage.open();
    });
    $$('.ks-pb-popup-dark').on('click', function () {
        photoBrowserPopupDark.open();
    });
    $$('.ks-pb-standalone-dark').on('click', function () {
        photoBrowserDark.open();
    });
    $$('.ks-pb-lazy').on('click', function () {
        photoBrowserLazy.open();
    });
});

/* ===== Infinite Scroll Page ===== */
myApp.onPageInit('infinite-scroll', function (page) {
    // Loading trigger
    var loading = false;
    // Last loaded index, we need to pass it to script
    var lastLoadedIndex = $$('.infinite-scroll .list-block li').length;
    // Attach 'infinite' event handler
    $$('.infinite-scroll').on('infinite', function () {
        // Exit, if loading in progress
        if (loading) return;
        // Set loading trigger
        loading = true;
        // Request some file with data
        $$.get('infinite-scroll-load.php', {leftIndex: lastLoadedIndex + 1}, function (data) {
            loading = false;
            if (data === '') {
                // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                myApp.detachInfiniteScroll($$('.infinite-scroll'));
            }
            else {
                // Append loaded elements to list block
                $$('.infinite-scroll .list-block ul').append(data);
                // Update last loaded index
                lastLoadedIndex = $$('.infinite-scroll .list-block li').length;
            }
        });
    });
});

/* ===== Notifications Page ===== */
myApp.onPageInit('notifications', function (page) {
    $$('.ks-notification-1').on('click', function () {
        myApp.addNotification({
            message: 'Simple message'
        });
    });
    $$('.ks-notification-2').on('click', function () {
        myApp.addNotification({
            message: 'Multi-line message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in magna nisi.',
        });
    });
    $$('.ks-notification-3').on('click', function () {
        myApp.addNotification({
            message: 'Nice yellow button',
            button: {
                text: 'Click me',
                color: 'yellow'
            }
        });
    });
    $$('.ks-notification-4').on('click', function () {
        myApp.addNotification({
            message: 'Close me to see Alert',
            button: {
                text: 'Close',
                color: 'lightgreen'
            },
            onClose: function () {
                myApp.alert('Notification closed');
            }
        });
    });
});

/* ===== Login screen page events ===== */
myApp.onPageInit('login-screen-embedded', function (page) {
    $$(page.container).find('.button').on('click', function () {
        var username = $$(page.container).find('input[name="username"]').val();
        var password = $$(page.container).find('input[name="password"]').val();
        myApp.alert('Username: ' + username + ', password: ' + password, function () {
            mainView.router.back();
        });
    });
});
$$('.login-screen').find('.button').on('click', function () {
    var username = $$('.login-screen').find('input[name="username"]').val();
    var password = $$('.login-screen').find('input[name="password"]').val();
    myApp.alert('Username: ' + username + ', password: ' + password, function () {
        myApp.closeModal('.login-screen');
    });
});

/* ===== Demo Popover ===== */
$$('.popover a').on('click', function () {
    myApp.closeModal('.popover');
});

/* ===== Color themes ===== */
myApp.onPageInit('color-themes', function (page) {
    $$(page.container).find('.ks-color-theme').click(function () {
        var classList = $$('body')[0].classList;
        for (var i = 0; i < classList.length; i++) {
            if (classList[i].indexOf('theme') === 0) classList.remove(classList[i]);
        }
        classList.add('theme-' + $$(this).attr('data-theme'));
    });
    $$(page.container).find('.ks-layout-theme').click(function () {
        var classList = $$('body')[0].classList;
        for (var i = 0; i < classList.length; i++) {
            if (classList[i].indexOf('layout-') === 0) classList.remove(classList[i]);
        }
        classList.add('layout-' + $$(this).attr('data-theme')); 
    });
});

/* ===== Virtual List ===== */
myApp.onPageInit('virtual-list', function (page) {
    // Generate array with 10000 demo items:
    var items = [];
    for (var i = 0; i < 10000; i++) {
        items.push({
            title: 'Item ' + i,
            subtitle: 'Subtitle ' + i
        });
    }

    // Create virtual list
    var virtualList = myApp.virtualList($$(page.container).find('.virtual-list'), {
        // Pass array with items
        items: items,
        // Custom search function for searchbar
        searchAll: function (query, items) {
            var found = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].title.indexOf(query) >= 0 || query.trim() === '') found.push(i);
            }
            return found; //return array with mathced indexes
        },
        // List item Template7 template
        template: '<li>' +
                    '<a href="#" class="item-link item-content">' +
                      '<div class="item-inner">' +
                        '<div class="item-title-row">' +
                          '<div class="item-title">{{title}}</div>' +
                        '</div>' +
                        '<div class="item-subtitle">{{subtitle}}</div>' +
                      '</div>' +
                    '</a>' +
                  '</li>',
        // Item height
        height: 73,
    });
});
/* ===== Swiper Two Way Control Gallery ===== */
myApp.onPageInit('swiper-gallery', function (page) {
    var swiperTop = myApp.swiper('.ks-swiper-gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10
    });
    var swiperThumbs = myApp.swiper('.ks-swiper-gallery-thumbs', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    swiperTop.params.control = swiperThumbs;
    swiperThumbs.params.control = swiperTop;
});
/* ===== Calendar ===== */
myApp.onPageInit('calendar', function (page) {
    // Default
    var calendarDefault = myApp.calendar({
        input: '#ks-calendar-default',
    });
    // With custom date format
    var calendarDateFormat = myApp.calendar({
        input: '#ks-calendar-date-format',
        dateFormat: 'DD, MM dd, yyyy'
    });
    // With multiple values
    var calendarMultiple = myApp.calendar({
        input: '#ks-calendar-multiple',
        dateFormat: 'M dd yyyy',
        multiple: true
    });
    // Inline with custom toolbar
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
    var calendarInline = myApp.calendar({
        container: '#ks-calendar-inline-container',
        value: [new Date()],
        weekHeader: false,
        header: false,
        footer: false,
        toolbarTemplate: 
            '<div class="toolbar calendar-custom-toolbar">' +
                '<div class="toolbar-inner">' +
                    '<div class="left">' +
                        '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
                    '</div>' +
                    '<div class="center"></div>' +
                    '<div class="right">' +
                        '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
                    '</div>' +
                '</div>' +
            '</div>',
        onOpen: function (p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
            $$('.calendar-custom-toolbar .left .link').on('click', function () {
                calendarInline.prevMonth();
            });
            $$('.calendar-custom-toolbar .right .link').on('click', function () {
                calendarInline.nextMonth();
            });
        },
        onMonthYearChangeStart: function (p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] +', ' + p.currentYear);
        }
    });
});

/*-- area --*/
myApp.onPageInit('area', function (page) {
  
})

/*-- searchbar --*/
myApp.onPageInit('searchbar', function (page) {
  var mySearchbar = myApp.searchbar('.searchbar', {
    searchList: '.search-here',
    searchIn: '.button',
    onSearch: function  () {
      $$('.searchbar-input').addClass('active');
      $$('.searchbar-input .button').show();
    },
    onDisable: function  () {
      $$('.searchbar-input').removeClass('active');
      $$('.searchbar-input .button').hide();
    }
  }); 
  
  $$('#searchbar-config').click(function  () {
    var val = $$('.searchbar-input input').val();
    var geturl = 'search-page.php?value=' + val;
    mainView.router.load({
      url : geturl
    });
  })

})



/* ===== Pickers ===== */
myApp.onPageInit('pickers', function (page) {
    var today = new Date();

    // iOS Device picker
    var pickerDevice = myApp.picker({
        input: '#ks-picker-device',
        cols: [
            {
                textAlign: 'center',
                values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
            }
        ]
    });

    // Describe yourself picker
    var pickerDescribe = myApp.picker({
        input: '#ks-picker-describe',
        rotateEffect: true,
        cols: [
            {
                textAlign: 'left',
                values: ('Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot').split(' ')
            },
            {
                values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' ')
            },
        ]
    });

    // Dependent values
    var carVendors = {
        Japanese : ['Honda', 'Lexus', 'Mazda', 'Nissan', 'Toyota'],
        German : ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Volvo'],
        American : ['Cadillac', 'Chrysler', 'Dodge', 'Ford']
    };
    var pickerDependent = myApp.picker({
        input: '#ks-picker-dependent',
        rotateEffect: true,
        formatValue: function (picker, values) {
            return values[1];
        },
        cols: [
            {
                textAlign: 'left',
                values: ['Japanese', 'German', 'American'],
                onChange: function (picker, country) {
                    if(picker.cols[1].replaceValues){
                        picker.cols[1].replaceValues(carVendors[country]);
                    }
                }
            },
            {
                values: carVendors.Japanese,
                width: 160,
            },
        ]
    });

    // Custom Toolbar
    var pickerCustomToolbar = myApp.picker({
        input: '#ks-picker-custom-toolbar',
        rotateEffect: true,
        toolbarTemplate: 
            '<div class="toolbar">' +
                '<div class="toolbar-inner">' +
                    '<div class="left">' +
                        '<a href="#" class="link toolbar-randomize-link">Randomize</a>' +
                    '</div>' +
                    '<div class="right">' +
                        '<a href="#" class="link close-picker">That\'s me</a>' +
                    '</div>' +
                '</div>' +
            '</div>',
        cols: [
            {
                values: ['Mr', 'Ms'],
            },
            {
                textAlign: 'left',
                values: ('Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot').split(' ')
            },
            {
                values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' ')
            },
        ],
        onOpen: function (picker) {
            picker.container.find('.toolbar-randomize-link').on('click', function () {
                var col0Values = picker.cols[0].values;
                var col0Random = col0Values[Math.floor(Math.random() * col0Values.length)];

                var col1Values = picker.cols[1].values;
                var col1Random = col1Values[Math.floor(Math.random() * col1Values.length)];

                var col2Values = picker.cols[2].values;
                var col2Random = col2Values[Math.floor(Math.random() * col2Values.length)];
                
                picker.setValue([col0Random, col1Random, col2Random]);
            });
        }
    });

    // Inline date-time
    var pickerInline = myApp.picker({
        input: '#ks-picker-date',
        container: '#ks-picker-date-container',
        toolbar: false,
        rotateEffect: true,
        value: [today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())],
        onChange: function (picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0]*1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
            }
        },
        formfatValue: function (p, values, displayValues) {
            return displayValues[0] + ' ' + values[1] + ', ' + values[2] + ' ' + values[3] + ':' + values[4];
        },
        cols: [
            // Months
            {
                values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
                displayValues: ('January February March April May June July August September October November December').split(' '),
                textAlign: 'left'
            },
            // Days
            {
                values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
            },
            // Years
            {
                values: (function () {
                    var arr = [];
                    for (var i = 1950; i <= 2030; i++) { arr.push(i); }
                    return arr;
                })(),
            },
            // Space divider
            {
                divider: true,
                content: '&nbsp;&nbsp;'
            },
            // Hours
            {
                values: (function () {
                    var arr = [];
                    for (var i = 0; i <= 23; i++) { arr.push(i); }
                    return arr;
                })(),
            },
            // Divider
            {
                divider: true,
                content: ':'
            },
            // Minutes
            {
                values: (function () {
                    var arr = [];
                    for (var i = 0; i <= 59; i++) { arr.push(i < 10 ? '0' + i : i); }
                    return arr;
                })(),
            }
        ]
    });
});

/* ===== Change statusbar bg when panel opened/closed ===== */
$$('.panel-left').on('open', function () {
    $$('.statusbar-overlay').addClass('with-panel-left');
});
$$('.panel-right').on('open', function () {
    $$('.statusbar-overlay').addClass('with-panel-right');
});
$$('.panel-left, .panel-right').on('close', function () {
    $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
});

/* ===== Generate Content Dynamically ===== */
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-content" class="page">' +
        '    <!-- Top Navbar-->' +
        '    <div class="navbar">' +
        '      <div class="navbar-inner">' +
        '        <div class="left"><a href="#" class="back link icon-only"><i class="icon icon-back"></i></a></div>' +
        '        <div class="center">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '      </div>' +
        '    </div>' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '        <p>Go <a href="#" class="back">back</a> or generate <a href="#" class="ks-generate-page">one more page</a>.</p>' +
        '      </div>' +
        '    </div>' +
        '  </div>'
    );
    return;
}
$$(document).on('click', '.ks-generate-page', createContentPage);


/* ===== Infinite Scroll Page ===== */
myApp.onPageInit('index', function (page) {
 // fixjjh();

});

myApp.onPageInit('pro-item', function (page) {
    $$('.ks-pb-standalone').on('click', function () {
        photoBrowserStandalone.open();
    });  
})
myApp.onPageInit('jjp-item', function (page) {
    $$('.ks-pb-standalone').on('click', function () {
        photoBrowserStandalone.open();
    });  
})


myApp.onPageInit('pro-map', function (page) {
     /* ========================================================================
  百度地图*/
  +(function(){    
      //创建和初始化地图函数：
      function initMap(){
          createMap();//创建地图
          setMapEvent();//设置地图事件
          addMapControl();//向地图添加控件
          addMarker();//向地图中添加marker
      }
      
      //创建地图函数：
      function createMap(){
          var map = new BMap.Map("bd-map1");//在百度地图容器中创建一个地图
          var point = new BMap.Point(116.460054,39.922507);//定义一个中心点坐标
          map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
          window.map = map;//将map变量存储在全局
      }
      
      //地图事件设置函数：
      function setMapEvent(){
          map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
          map.enableScrollWheelZoom();//启用地图滚轮放大缩小
          map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
          map.enableKeyboard();//启用键盘上下左右键移动地图
      }
      
      //地图控件添加函数：
      function addMapControl(){
          //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
    map.addControl(ctrl_nav);
          //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
    map.addControl(ctrl_ove);
          //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
      }

      //标注点数组
      var markerArr = [{title:"北京市朝阳区光华路9号时尚大厦20层",content:"北京芭莎能量文化活动有限公司",point:"116.460054|39.922507",isOpen:1,icon:{w:23,h:25,l:69,t:21,x:9,lb:12}}
       ];
      //创建marker
      function addMarker(){
          for(var i=0;i<markerArr.length;i++){
              var json = markerArr[i];
              var p0 = json.point.split("|")[0];
              var p1 = json.point.split("|")[1];
              var point = new BMap.Point(p0,p1);
        var iconImg = createIcon(json.icon);
              var marker = new BMap.Marker(point,{icon:iconImg});
        var iw = createInfoWindow(i);
        var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
        marker.setLabel(label);
              map.addOverlay(marker);
              label.setStyle({
                          borderColor:"#808080",
                          color:"#333",
                          cursor:"pointer"
              });
        
        (function(){
          var index = i;
          var _iw = createInfoWindow(i);
          var _marker = marker;
          _marker.addEventListener("click",function(){
              this.openInfoWindow(_iw);
            });
            _iw.addEventListener("open",function(){
              _marker.getLabel().hide();
            })
            _iw.addEventListener("close",function(){
              _marker.getLabel().show();
            })
          label.addEventListener("click",function(){
              _marker.openInfoWindow(_iw);
            })
          if(!!json.isOpen){
            label.hide();
            _marker.openInfoWindow(_iw);
          }
        })()
          }
      }
      //创建InfoWindow
      function createInfoWindow(i){
          var json = markerArr[i];
          var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
          return iw;
      }
      //创建一个Icon
      function createIcon(json){
          var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
          return icon;
      }
      
      initMap();//创建和初始化地图

  })(); 
})


/* ===== page-search ===== */
myApp.onPageInit('search-page', function (page) {
  //fixwidth
  var getheight = ($(window).height() - $('.search-page-content .infinite-scroll').offset().top + 10);
  $('.search-page-content .infinite-scroll').height(getheight);
  // Loading trigger
  var loading = false;
  // Last loaded index, we need to pass it to script
  var lastLoadedIndex = $$('.infinite-scroll ul li').length;
  // Attach 'infinite' event handler

  $$('.infinite-scroll').on('infinite', function () {
      // Exit, if loading in progress
      
      if (loading) return;
      // Set loading trigger
      loading = true;
      // Request some file with data
      $$.get('infinite-scroll-load.php', {leftIndex: lastLoadedIndex + 1}, function (data) {
          loading = false;
          if (data === '') {
              // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
              myApp.detachInfiniteScroll($$('.infinite-scroll'));
          }
          else {
              // Append loaded elements to list block
              $$('.infinite-scroll > ul').append(data);
              // Update last loaded index
              lastLoadedIndex = $$('.infinite-scroll ul > li').length;
          }
      });
  });
});

/* ===== page-find ===== */
myApp.onPageInit('find-page', function (page) {
  //fixwidth
  var getheight = ($(window).height() - $('.search-page-content .infinite-scroll').offset().top + 10);
  $('.search-page-content .infinite-scroll').height(getheight);
  // Loading trigger
  var loading = false;
  // Last loaded index, we need to pass it to script
  var lastLoadedIndex = $$('.infinite-scroll ul li').length;
  // Attach 'infinite' event handler

  $$('.infinite-scroll').on('infinite', function () {
      // Exit, if loading in progress
      
      if (loading) return;
      // Set loading trigger
      loading = true;
      // Request some file with data
      $$.get('infinite-scroll-load-find.php', {leftIndex: lastLoadedIndex + 1}, function (data) {
          loading = false;
          if (data === '') {
              // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
              myApp.detachInfiniteScroll($$('.infinite-scroll'));
          }
          else {
              // Append loaded elements to list block
              $$('.infinite-scroll > ul').append(data);
              // Update last loaded index
              lastLoadedIndex = $$('.infinite-scroll ul > li').length;
          }
      });
  });
});

/*-- catelist-page --*/
myApp.onPageInit('catelist-page', function (page) {
  $('.select-moban-bk,.block-right-bk').height($(window).height()-90-36);
  $('.select-moban h2').on('click',function  () {
    if ($(this).data('open') == true) {
      $(this).next('.select-moban-bk').hide();
      $(this).data('open',false);
      return false;
    }
    $('.select-moban h2').data('open',false);
    $('.select-moban-bk').hide();
    $(this).data('open',true);
    $(this).next('.select-moban-bk').show();
  })

  $('.block-side a').on('click',function  () {
    if ($(this).hasClass('.active')) {
      return false;
    }else {
      var ind = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $('.block-right-bk .block-wrap').eq(ind).show().siblings().hide();
    }
  })

  //fixwidth
  var getheight = ($(window).height() - $('.search-page-content .infinite-scroll').offset().top + 10);
  $('.search-page-content .infinite-scroll').height(getheight);
  // Loading trigger
  var loading = false;
  // Last loaded index, we need to pass it to script
  var lastLoadedIndex = $$('.infinite-scroll ul li').length;
  // Attach 'infinite' event handler

  $$('.infinite-scroll').on('infinite', function () {
      // Exit, if loading in progress
      
      if (loading) return;
      // Set loading trigger
      loading = true;
      // Request some file with data
      $$.get('infinite-scroll-load.php', {leftIndex: lastLoadedIndex + 1}, function (data) {
          loading = false;
          if (data === '') {
              // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
              myApp.detachInfiniteScroll($$('.infinite-scroll'));
          }
          else {
              // Append loaded elements to list block
              $$('.infinite-scroll > ul').append(data);
              // Update last loaded index
              lastLoadedIndex = $$('.infinite-scroll ul > li').length;
          }
      });
  });
});



//预加载某页
var ajurl = 'pro-biz.php';
mainView.router.load({
  //url : ajurl
});


myApp.onPageBeforeAnimation('index', function (page) {
 // fixjjh();
  removeStatc(0);
  $$.countTime();
});

myApp.onPageBeforeAnimation('search-page', function (page) {
 // fixjjh();
  removeStatc(1);
});

myApp.onPageBeforeAnimation('find-page', function (page) {
 // fixjjh();
  removeStatc(2);
});

myApp.onPageBeforeAnimation('tabs', function (page) {
 // fixjjh();
  removeStatc(3);
});

function removeStatc (n) {
  $('.navbar-fixed a').removeClass('current');
  $('.navbar-fixed .boxfx').eq(n).find('a').addClass('current');
}

/*-- 
  anchor:cuki13
  countTime = "startTime endTime"
  bydtime:
  var startTime = new Date("<?php date_default_timezone_set('Asia/Shanghai'); echo date('Y/m/d H:i:s'); ?>").getTime();
  var endTime = new Date("<?=str_replace('-', '/', $btime)?>").getTime();

  exmaple:
  <div class="counttime" countTime="2015/05/14 14:40:53,2015/05/08 11:00:00">
    <span countDay ></span>
    <span countHour ></span>
    <span countMin ></span>
    <span countSec ></span>
  </div>

  use:
 --*/

+(function() {
  'use strict';

  var selectString = '[countTime]';

  function CountTime (startTime,endTime,obj) {
    this.startTime = startTime;
    this.endTime = endTime;
    this.sbTime = Math.floor((this.endTime - this.startTime) / 1e3);
 
    this.second = obj.find('[countSec]');
    this.minite = obj.find('[countMin]');
    this.hour = obj.find('[countHour]');
    this.day = obj.find('[countDay]');
    this.el = obj;
  }

  CountTime.prototype.countPro = function  () {
    
    this.el.trigger('countPro');
    var getSbTime = this.sbTime;
    this.second.html(checkSimple(Math.floor(getSbTime % 60)));
    this.minite.html(checkSimple(Math.floor(getSbTime / 60 % 60)));
    this.hour.html(checkSimple(Math.floor(getSbTime / 3600 % 24)));
    this.day.html(checkSimple(Math.floor(getSbTime / 3600 / 24)));
    
    /*
    if (this.el.is(':hidden')) {
      this.el.show();
    }
    */

    if (this.sbTime == 0) {
      this.el.trigger('countEnd');
    }
    this.sbTime--;
    

  }

  function checkSimple (num) {
    num = num.toString();
    
    
    if (num.length < 2) {
      num = '<span class="num-ib">0</span>' + '<span class="num-ib">' + num + '</span>';
    }else {
      var arry = '';
      for (var i = 0;  i<num.length ; i++) {
        arry += '<span class="num-ib">' + num.charAt(i) + '</span>';
      }  
      num = arry;
    }

    
    return num
  }

  CountTime.prototype.end = function  () {
    this.el.trigger('countEnd');
    this.second.html(0);
    this.minite.html(0);
    this.hour.html(0);
    this.day.html(0);
  }

  CountTime.prototype.init = function  () {
    if (this.sbTime <= 0) {
      this.end();
    }else {
      var $this = this;
      setInterval(
        function(){
          $this.countPro();        
        },1e3
      )
    }
  }
  

  $$.countTime = function  () {
    $$(selectString).each(function () {
      if ($$(this).data('countTime') == true) {
        return false;
      }
      var attrpro = $$(this).attr('countTime').split(',');
      for (var i = 0;  i<attrpro.length ; i++) {
        if (attrpro[i] == 'now') {
          attrpro[i] = new Date().getTime();
        }else {
          attrpro[i] = new Date(attrpro[i]).getTime();
        }
      }

      $$(this).data('countTime',true);
     
      var timmer = new CountTime(attrpro[0],attrpro[1],$$(this));
      timmer.init();
    })    
  }

  $$.countTime();

})();

//底部状态
//$('.navbar-fixed a').on('click tap',function  () {
//  $(this).addClass('current').parents().siblings().find('a').removeClass('current');
//})

/*-- pro-biz --*/

var photoBrowserBiz = [
	{
		url: 'http://p1.meituan.net/460.280/deal/__12191486__6202212.jpg'
		//caption: 'Amazing beach in Goa, India'
	},
    {
        url: 'http://i1.s1.dpfile.com/pc/ge/7e0b0bc48fee263ff724c8b9dab70913(240c180)/thumb.jpg'
    }
    
];

var photoBrowserStandalone = myApp.photoBrowser({
    photos: photoBrowserBiz,
    ofText:'/'
});

myApp.onPageInit('pro-biz', function (page) {
    $$('.ks-pb-standalone').on('click', function () {
        photoBrowserStandalone.open();
    });  
})