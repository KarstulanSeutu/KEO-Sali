(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"start":"this.init()","data":{"history":{},"defaultLocale":"en","name":"Player4092","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"volume":1,"rate":1},"displayTooltipInTouchScreens":true},"children":["this.MainViewer"],"height":"100%","width":"100%","layout":"absolute","backgroundColorRatios":[0],"hash": "097fe8ab9a1d95ee68a5e4e2b9694665f5d370563615c08efc3faa967d55dd42", "definitions": [{"subtitlesFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"vrPointerSelectionTime":2000,"data":{"name":"Main Viewer"},"toolTipPaddingRight":6,"playbackBarHeight":10,"progressBorderSize":0,"progressHeight":2,"toolTipFontFamily":"Arial","playbackBarBackgroundOpacity":1,"progressBarBorderRadius":2,"toolTipPaddingBottom":4,"toolTipPaddingTop":4,"playbackBarHeadWidth":6,"progressBarBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","height":"100%","playbackBarProgressBorderSize":0,"width":"100%","playbackBarRight":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowVerticalLength":1,"surfaceReticleColor":"#FFFFFF","subtitlesTop":0,"playbackBarProgressBorderRadius":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingLeft":6,"progressBorderRadius":2,"subtitlesBottom":50,"firstTransitionDuration":0,"playbackBarHeadShadowBlurRadius":3,"progressBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"progressLeft":"33%","playbackBarLeft":0,"subtitlesTextShadowColor":"#000000","progressOpacity":0.7,"class":"ViewerArea","progressRight":"33%","subtitlesFontSize":"3vmin","id":"MainViewer","progressBarBackgroundColorDirection":"horizontal","vrThumbstickRotationStep":20,"toolTipShadowColor":"#333138","toolTipFontColor":"#606060","playbackBarProgressBackgroundColorRatios":[0],"subtitlesGap":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"toolTipBorderColor":"#767676","subtitlesBackgroundColor":"#000000","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","toolTipTextShadowColor":"#000000","playbackBarBorderRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadHeight":15,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBackgroundOpacity":0.2,"playbackBarHeadBorderSize":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","playbackBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","progressBorderColor":"#000000","vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"progressBarBackgroundColor":["#3399FF"],"propagateClick":false,"playbackBarHeadShadow":true,"progressBackgroundColor":["#000000"],"progressBottom":10,"minWidth":100,"minHeight":50,"subtitlesTextShadowOpacity":1},{"enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_A73B8B87_B032_7887_41D2_AA2B63D5BFF6","id":"panorama_A73EF6FF_B032_A887_41DF_9B9786517687_camera","class":"PanoramaCamera"},{"enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_A73B4B87_B032_7887_418A_44D621A62A6D","id":"panorama_A73B9995_B032_589B_41DD_DC563B569009_camera","class":"PanoramaCamera"},{"enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_A73BAB87_B032_7887_41A5_B9B9D4667976","id":"panorama_A73D6304_B032_E979_41D4_06CDDD713B19_camera","class":"PanoramaCamera"},{"hfovMin":"150%","label":trans('panorama_A73B9995_B032_589B_41DD_DC563B569009.label'),"overlays":["this.overlay_AC170BEA_B035_B889_41D1_52E46F5EDDDB"],"data":{"label":"IMG_20241210_135851_988"},"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","url":"media/panorama_A73B9995_B032_589B_41DD_DC563B569009_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","height":2048,"width":12288},{"rowCount":2,"tags":"ondemand","url":"media/panorama_A73B9995_B032_589B_41DD_DC563B569009_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","height":1024,"width":6144},{"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_A73B9995_B032_589B_41DD_DC563B569009_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A73B9995_B032_589B_41DD_DC563B569009_t.jpg"}],"hfov":360,"adjacentPanoramas":[{"distance":3.38,"panorama":"this.panorama_A73B02EB_B032_688F_41C9_71B88725F9C3","backwardYaw":-85.65,"yaw":57.65,"class":"AdjacentPanorama","data":{"overlayID":"overlay_AC170BEA_B035_B889_41D1_52E46F5EDDDB"},"select":"this.overlay_AC170BEA_B035_B889_41D1_52E46F5EDDDB.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_A73B9995_B032_589B_41DD_DC563B569009_t.jpg","id":"panorama_A73B9995_B032_589B_41DD_DC563B569009"},{"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"arrowKeysAction":"translate","displayPlaybackBar":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","id":"MainViewerPanoramaPlayer"},{"items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A73EF6FF_B032_A887_41DF_9B9786517687","camera":"this.panorama_A73EF6FF_B032_A887_41DF_9B9786517687_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A73B02EB_B032_688F_41C9_71B88725F9C3","camera":"this.panorama_A73B02EB_B032_688F_41C9_71B88725F9C3_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A73B9995_B032_589B_41DD_DC563B569009","camera":"this.panorama_A73B9995_B032_589B_41DD_DC563B569009_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_A73D6304_B032_E979_41D4_06CDDD713B19","camera":"this.panorama_A73D6304_B032_E979_41D4_06CDDD713B19_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"class":"PlayList","id":"mainPlayList"},{"hfovMin":"150%","label":trans('panorama_A73EF6FF_B032_A887_41DF_9B9786517687.label'),"overlays":["this.overlay_AC2B040D_B032_AF8B_41E3_CB54FCDE8DDB","this.overlay_ACA38897_B033_D887_41CB_71A5D0E2267A"],"data":{"label":"IMG_20241210_135850_090"},"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","url":"media/panorama_A73EF6FF_B032_A887_41DF_9B9786517687_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","height":2048,"width":12288},{"rowCount":2,"tags":"ondemand","url":"media/panorama_A73EF6FF_B032_A887_41DF_9B9786517687_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","height":1024,"width":6144},{"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_A73EF6FF_B032_A887_41DF_9B9786517687_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A73EF6FF_B032_A887_41DF_9B9786517687_t.jpg"}],"hfov":360,"adjacentPanoramas":[{"distance":4.43,"panorama":"this.panorama_A73B02EB_B032_688F_41C9_71B88725F9C3","backwardYaw":109.3,"yaw":-129.52,"class":"AdjacentPanorama","data":{"overlayID":"overlay_AC2B040D_B032_AF8B_41E3_CB54FCDE8DDB"},"select":"this.overlay_AC2B040D_B032_AF8B_41E3_CB54FCDE8DDB.get('areas').forEach(function(a){ a.trigger('click') })"},{"distance":7.27,"panorama":"this.panorama_A73D6304_B032_E979_41D4_06CDDD713B19","backwardYaw":168.65,"yaw":20.09,"class":"AdjacentPanorama","data":{"overlayID":"overlay_ACA38897_B033_D887_41CB_71A5D0E2267A"},"select":"this.overlay_ACA38897_B033_D887_41CB_71A5D0E2267A.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_A73EF6FF_B032_A887_41DF_9B9786517687_t.jpg","id":"panorama_A73EF6FF_B032_A887_41DF_9B9786517687"},{"hfovMin":"150%","label":trans('panorama_A73B02EB_B032_688F_41C9_71B88725F9C3.label'),"overlays":["this.overlay_A9D20BCF_B036_D887_41CD_D486C3BE84BE","this.overlay_AC59E03F_B032_6787_41E0_59B2B405E64E"],"data":{"label":"IMG_20241210_135852_856"},"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","url":"media/panorama_A73B02EB_B032_688F_41C9_71B88725F9C3_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","height":2048,"width":12288},{"rowCount":2,"tags":"ondemand","url":"media/panorama_A73B02EB_B032_688F_41C9_71B88725F9C3_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","height":1024,"width":6144},{"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_A73B02EB_B032_688F_41C9_71B88725F9C3_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A73B02EB_B032_688F_41C9_71B88725F9C3_t.jpg"}],"hfov":360,"adjacentPanoramas":[{"distance":3.15,"panorama":"this.panorama_A73B9995_B032_589B_41DD_DC563B569009","backwardYaw":57.65,"yaw":-85.65,"class":"AdjacentPanorama","data":{"overlayID":"overlay_A9D20BCF_B036_D887_41CD_D486C3BE84BE"},"select":"this.overlay_A9D20BCF_B036_D887_41CD_D486C3BE84BE.get('areas').forEach(function(a){ a.trigger('click') })"},{"distance":3.84,"panorama":"this.panorama_A73EF6FF_B032_A887_41DF_9B9786517687","backwardYaw":-129.52,"yaw":109.3,"class":"AdjacentPanorama","data":{"overlayID":"overlay_AC59E03F_B032_6787_41E0_59B2B405E64E"},"select":"this.overlay_AC59E03F_B032_6787_41E0_59B2B405E64E.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_A73B02EB_B032_688F_41C9_71B88725F9C3_t.jpg","id":"panorama_A73B02EB_B032_688F_41C9_71B88725F9C3"},{"enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_A73B3B87_B032_7887_4181_571E1922527C","id":"panorama_A73B02EB_B032_688F_41C9_71B88725F9C3_camera","class":"PanoramaCamera"},{"hfovMin":"150%","label":trans('panorama_A73D6304_B032_E979_41D4_06CDDD713B19.label'),"overlays":["this.overlay_ACC455B5_B032_A89B_41E5_98B7E6F510A4"],"data":{"label":"IMG_20241210_135849_121"},"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"rowCount":4,"tags":"ondemand","url":"media/panorama_A73D6304_B032_E979_41D4_06CDDD713B19_0/{face}/0/{row}_{column}.jpg","colCount":24,"class":"TiledImageResourceLevel","height":2048,"width":12288},{"rowCount":2,"tags":"ondemand","url":"media/panorama_A73D6304_B032_E979_41D4_06CDDD713B19_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","height":1024,"width":6144},{"rowCount":1,"tags":["ondemand","preload"],"url":"media/panorama_A73D6304_B032_E979_41D4_06CDDD713B19_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","height":512,"width":3072}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A73D6304_B032_E979_41D4_06CDDD713B19_t.jpg"}],"hfov":360,"adjacentPanoramas":[{"distance":6.05,"panorama":"this.panorama_A73EF6FF_B032_A887_41DF_9B9786517687","backwardYaw":20.09,"yaw":168.65,"class":"AdjacentPanorama","data":{"overlayID":"overlay_ACC455B5_B032_A89B_41E5_98B7E6F510A4"},"select":"this.overlay_ACC455B5_B032_A89B_41E5_98B7E6F510A4.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"vfov":180,"class":"Panorama","thumbnailUrl":"media/panorama_A73D6304_B032_E979_41D4_06CDDD713B19_t.jpg","id":"panorama_A73D6304_B032_E979_41D4_06CDDD713B19"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_A73B8B87_B032_7887_41D2_AA2B63D5BFF6","class":"PanoramaCameraSequence"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_A73B4B87_B032_7887_418A_44D621A62A6D","class":"PanoramaCameraSequence"},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_A73BAB87_B032_7887_41A5_B9B9D4667976","class":"PanoramaCameraSequence"},{"data":{"hasPanoramaAction":true,"label":"Circle 02c"},"useHandCursor":true,"items":[{"vfov":8.72,"distance":100,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle 02c"},"scaleMode":"fit_inside","image":"this.AnimatedImageResource_9158E485_B0CD_AF7B_41E2_738BF2EEB494","pitch":-26.72,"yaw":57.65,"hfov":20.78}],"areas":["this.HotspotPanoramaOverlayArea_AC1B3BFD_B035_B88B_41B0_F21AF021592E"],"class":"HotspotPanoramaOverlay","id":"overlay_AC170BEA_B035_B889_41D1_52E46F5EDDDB","enabledInCardboard":true,"maps":[]},{"data":{"hasPanoramaAction":true,"label":"Circle 02c"},"useHandCursor":true,"items":[{"vfov":5.36,"distance":100,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle 02c"},"scaleMode":"fit_inside","image":"this.AnimatedImageResource_915B947F_B0CD_AF87_41D5_B102AE05EACC","pitch":-20.99,"yaw":-129.52,"hfov":16.89}],"areas":["this.HotspotPanoramaOverlayArea_AC173413_B032_AF9F_41B9_DF89A1B4CCFF"],"class":"HotspotPanoramaOverlay","id":"overlay_AC2B040D_B032_AF8B_41E3_CB54FCDE8DDB","enabledInCardboard":true,"maps":[]},{"data":{"hasPanoramaAction":true,"label":"Circle 02c"},"useHandCursor":true,"items":[{"vfov":4.82,"distance":100,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle 02c"},"scaleMode":"fit_inside","image":"this.AnimatedImageResource_9158447F_B0CD_AF87_41CD_CE4B25065F94","pitch":-13.16,"yaw":20.09,"hfov":13.18}],"areas":["this.HotspotPanoramaOverlayArea_ACAF989E_B033_D889_41B7_41E2A34B6E72"],"class":"HotspotPanoramaOverlay","id":"overlay_ACA38897_B033_D887_41CB_71A5D0E2267A","enabledInCardboard":true,"maps":[]},{"data":{"hasPanoramaAction":true,"label":"Circle 02c"},"useHandCursor":true,"items":[{"vfov":8.14,"distance":100,"class":"HotspotPanoramaOverlayImage","rotationX":-22.41,"rotationY":6.64,"image":"this.AnimatedImageResource_9158747F_B0CD_AF87_41E5_F94F60E56BE7","pitch":-28.36,"data":{"label":"Circle 02c"},"yaw":-85.65,"scaleMode":"fit_inside","hfov":16.51}],"areas":["this.HotspotPanoramaOverlayArea_AA796C2E_B036_DF89_41B9_DB655A00BB64"],"class":"HotspotPanoramaOverlay","id":"overlay_A9D20BCF_B036_D887_41CD_D486C3BE84BE","enabledInCardboard":true,"maps":[]},{"data":{"hasPanoramaAction":true,"label":"Circle 02c"},"useHandCursor":true,"items":[{"vfov":10.22,"distance":100,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle 02c"},"roll":3.73,"image":"this.AnimatedImageResource_9158347F_B0CD_AF87_41CF_230FAC92C9F0","pitch":-23.89,"yaw":109.3,"scaleMode":"fit_inside","hfov":16.94}],"areas":["this.HotspotPanoramaOverlayArea_AC40304D_B032_678B_41D2_D35507DF0CB9"],"class":"HotspotPanoramaOverlay","id":"overlay_AC59E03F_B032_6787_41E0_59B2B405E64E","enabledInCardboard":true,"maps":[]},{"movements":[{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}],"id":"sequence_A73B3B87_B032_7887_4181_571E1922527C","class":"PanoramaCameraSequence"},{"data":{"hasPanoramaAction":true,"label":"Circle 02c"},"useHandCursor":true,"items":[{"vfov":3.65,"distance":100,"class":"HotspotPanoramaOverlayImage","data":{"label":"Circle 02c"},"roll":1.46,"image":"this.AnimatedImageResource_9158A485_B0CD_AF7B_41C6_127E2599A417","pitch":-15.68,"yaw":168.65,"scaleMode":"fit_inside","hfov":11.5}],"areas":["this.HotspotPanoramaOverlayArea_ACCDF5BC_B032_A889_41DE_155C1E7F358A"],"class":"HotspotPanoramaOverlay","id":"overlay_ACC455B5_B032_A89B_41E5_98B7E6F510A4","enabledInCardboard":true,"maps":[]},{"rowCount":1,"frameCount":24,"finalFrame":"first","class":"AnimatedImageResource","id":"AnimatedImageResource_9158E485_B0CD_AF7B_41E2_738BF2EEB494","colCount":24,"frameDuration":41,"levels":[{"url":"media/res_ADA651D9_B03D_E88B_41A2_AB2D01D34153_0.png","class":"ImageResourceLevel","height":60,"width":6480}]},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_AC1B3BFD_B035_B88B_41B0_F21AF021592E","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"rowCount":1,"frameCount":24,"finalFrame":"first","class":"AnimatedImageResource","id":"AnimatedImageResource_915B947F_B0CD_AF87_41D5_B102AE05EACC","colCount":24,"frameDuration":41,"levels":[{"url":"media/res_ADA651D9_B03D_E88B_41A2_AB2D01D34153_0.png","class":"ImageResourceLevel","height":60,"width":6480}]},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_AC173413_B032_AF9F_41B9_DF89A1B4CCFF","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"rowCount":1,"frameCount":24,"finalFrame":"first","class":"AnimatedImageResource","id":"AnimatedImageResource_9158447F_B0CD_AF87_41CD_CE4B25065F94","colCount":24,"frameDuration":41,"levels":[{"url":"media/res_ADA651D9_B03D_E88B_41A2_AB2D01D34153_0.png","class":"ImageResourceLevel","height":60,"width":6480}]},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_ACAF989E_B033_D889_41B7_41E2A34B6E72","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"any"},{"rowCount":1,"frameCount":24,"finalFrame":"first","class":"AnimatedImageResource","id":"AnimatedImageResource_9158747F_B0CD_AF87_41E5_F94F60E56BE7","colCount":24,"frameDuration":41,"levels":[{"url":"media/res_ADA651D9_B03D_E88B_41A2_AB2D01D34153_0.png","class":"ImageResourceLevel","height":60,"width":6480}]},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_AA796C2E_B036_DF89_41B9_DB655A00BB64","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any"},{"rowCount":1,"frameCount":24,"finalFrame":"first","class":"AnimatedImageResource","id":"AnimatedImageResource_9158347F_B0CD_AF87_41CF_230FAC92C9F0","colCount":24,"frameDuration":41,"levels":[{"url":"media/res_ADA651D9_B03D_E88B_41A2_AB2D01D34153_0.png","class":"ImageResourceLevel","height":60,"width":6480}]},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_AC40304D_B032_678B_41D2_D35507DF0CB9","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any"},{"rowCount":1,"frameCount":24,"finalFrame":"first","class":"AnimatedImageResource","id":"AnimatedImageResource_9158A485_B0CD_AF7B_41C6_127E2599A417","colCount":24,"frameDuration":41,"levels":[{"url":"media/res_ADA651D9_B03D_E88B_41A2_AB2D01D34153_0.png","class":"ImageResourceLevel","height":60,"width":6480}]},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_ACCDF5BC_B032_A889_41DE_155C1E7F358A","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any"}],"watermark":false,"scrollBarColor":"#000000","propagateClick":false,"class":"Player","scrollBarMargin":2,"backgroundColor":["#FFFFFF"],"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"id":"rootPlayer","minWidth":0,"scripts":{"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getOverlays":TDV.Tour.Script.getOverlays,"initQuiz":TDV.Tour.Script.initQuiz,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setValue":TDV.Tour.Script.setValue,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showWindow":TDV.Tour.Script.showWindow,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"downloadFile":TDV.Tour.Script.downloadFile,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"translate":TDV.Tour.Script.translate,"clone":TDV.Tour.Script.clone,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"init":TDV.Tour.Script.init,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"shareSocial":TDV.Tour.Script.shareSocial,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"historyGoForward":TDV.Tour.Script.historyGoForward,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setLocale":TDV.Tour.Script.setLocale,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"existsKey":TDV.Tour.Script.existsKey,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"disableVR":TDV.Tour.Script.disableVR,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"enableVR":TDV.Tour.Script.enableVR,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"createTween":TDV.Tour.Script.createTween,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"mixObject":TDV.Tour.Script.mixObject,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"openLink":TDV.Tour.Script.openLink,"quizShowScore":TDV.Tour.Script.quizShowScore,"executeJS":TDV.Tour.Script.executeJS,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"resumePlayers":TDV.Tour.Script.resumePlayers,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getKey":TDV.Tour.Script.getKey,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"quizStart":TDV.Tour.Script.quizStart,"getPixels":TDV.Tour.Script.getPixels,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList},"gap":10};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.19.js.map
})();
//Generated with v2024.0.19, Tue Dec 10 2024