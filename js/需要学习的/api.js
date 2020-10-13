var apiContent = {
    zTree_Setting: null,
    zTree_Node: null,
    zTree_Function: null,
    overlayDiv: null,
    overlayContent: null,
    overlayDetailDiv: null,
    overlayCloseBtn: null,
    overlayArrow: null,
    contentBoxDiv: null,
    settingDiv: null,
    functionDiv: null,
    overlaySearch: null,
    searchKey: null,
    searchResultInput: null,
    searchPrevBtn: null,
    searchNextBtn: null,
    apiCache: {},
    lastValue: "",
    searchNodes: [],
    searchNodesCur: 0,
    _init: function() {
        this.overlayDiv = $("#overlayDiv"),
        this.overlayContent = $("#overlayContent"),
        this.overlayDetailDiv = $("#overlayDetailDiv"),
        this.overlayCloseBtn = $("#overlayDivCloseBtn"),
        this.overlayArrow = $("#overlayDivArrow"),
        this.contentBoxDiv = $("#contentBox"),
        this.settingDiv = $("#api_setting"),
        this.functionDiv = $("#api_function"),
        this.searchKey = $(".searchKey"),
        this.overlaySearch = $(".overlaySearch"),
        this.searchResultInput = $(".searchResult"),
        this.searchPrevBtn = $(".searchPrev"),
        this.searchNextBtn = $(".searchNext");
        var e = {
            view: {
                fontCss: this.getFontCss,
                showLine: !1,
                showIcon: this.showIcon,
                showTitle: this.getTitle,
                selectedMulti: !1,
                dblClickExpand: !1
            },
            data: {
                key: {
                    title: "t"
                },
                simpleData: {
                    enable: !0,
                    idKey: "id",
                    pIdKey: "pId",
                    rootPId: ""
                }
            },
            callback: {
                onNodeCreated: this.onNodeCreated,
                beforeClick: this.beforeClick
            }
        };
        apiContent.zTree_Setting = $.fn.zTree.init($("#settingTree"), $.fn.zTree._z.tools.clone(e), [{
            id: 1,
            pId: 0,
            t: "setting",
            name: "var setting = {",
            open: !0
        }, {
            id: 11,
            pId: 1,
            t: "treeId",
            name: 'treeId : "",',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 12,
            pId: 1,
            t: "treeObj",
            name: "treeObj : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 121,
            pId: 1,
            name: ""
        }, {
            id: 20,
            pId: 1,
            t: "async",
            name: "async : {",
            open: !0
        }, {
            id: 201,
            pId: 20,
            t: "autoParam",
            name: "autoParam : [],",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 208,
            pId: 20,
            t: "contentType",
            name: 'contentType : "application...",',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 202,
            pId: 20,
            t: "dataFilter",
            name: "dataFilter : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 203,
            pId: 20,
            t: "dataType",
            name: 'dataType : "text",',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 204,
            pId: 20,
            t: "enable",
            name: "enable : false,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 205,
            pId: 20,
            t: "otherParam",
            name: "otherParam : [],",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 206,
            pId: 20,
            t: "type",
            name: 'type : "post",',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 209,
            pId: 20,
            t: "headers",
            name: "headers : {},",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 210,
            pId: 20,
            t: "xhrFields",
            name: "xhrFields : {},",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 207,
            pId: 20,
            t: "url",
            name: 'url : ""',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 21,
            pId: 1,
            name: "},"
        }, {
            id: 22,
            pId: 1,
            name: ""
        }, {
            id: 30,
            pId: 1,
            t: "callback",
            name: "callback : {",
            open: !0
        }, {
            id: 3001,
            pId: 30,
            t: "beforeAsync",
            name: "beforeAsync : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3002,
            pId: 30,
            t: "beforeCheck",
            name: "beforeCheck : null,",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 3003,
            pId: 30,
            t: "beforeClick",
            name: "beforeClick : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3004,
            pId: 30,
            t: "beforeCollapse",
            name: "beforeCollapse : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3004,
            pId: 30,
            t: "beforeDblClick",
            name: "beforeDblClick : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3005,
            pId: 30,
            t: "beforeDrag",
            name: "beforeDrag : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3006,
            pId: 30,
            t: "beforeDragOpen",
            name: "beforeDragOpen : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3007,
            pId: 30,
            t: "beforeDrop",
            name: "beforeDrop : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3029,
            pId: 30,
            t: "beforeEditName",
            name: "beforeEditName : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3008,
            pId: 30,
            t: "beforeExpand",
            name: "beforeExpand : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3009,
            pId: 30,
            t: "beforeMouseDown",
            name: "beforeMouseDown : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3010,
            pId: 30,
            t: "beforeMouseUp",
            name: "beforeMouseUp : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3011,
            pId: 30,
            t: "beforeRemove",
            name: "beforeRemove : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3012,
            pId: 30,
            t: "beforeRename",
            name: "beforeRename : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3013,
            pId: 30,
            t: "beforeRightClick",
            name: "beforeRightClick : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3014,
            pId: 30,
            name: ""
        }, {
            id: 3015,
            pId: 30,
            t: "onAsyncError",
            name: "onAsyncError : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3016,
            pId: 30,
            t: "onAsyncSuccess",
            name: "onAsyncSuccess : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3017,
            pId: 30,
            t: "onCheck",
            name: "onCheck : null,",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 3018,
            pId: 30,
            t: "onClick",
            name: "onClick : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3019,
            pId: 30,
            t: "onCollapse",
            name: "onCollapse : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3029,
            pId: 30,
            t: "onDblClick",
            name: "onDblClick : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3020,
            pId: 30,
            t: "onDrag",
            name: "onDrag : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3030,
            pId: 30,
            t: "onDragMove",
            name: "onDragMove : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3021,
            pId: 30,
            t: "onDrop",
            name: "onDrop : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3022,
            pId: 30,
            t: "onExpand",
            name: "onExpand : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3023,
            pId: 30,
            t: "onMouseDown",
            name: "onMouseDown : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3024,
            pId: 30,
            t: "onMouseUp",
            name: "onMouseUp : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3025,
            pId: 30,
            t: "onNodeCreated",
            name: "onNodeCreated : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 3026,
            pId: 30,
            t: "onRemove",
            name: "onRemove : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3027,
            pId: 30,
            t: "onRename",
            name: "onRename : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 3028,
            pId: 30,
            t: "onRightClick",
            name: "onRightClick : null",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 31,
            pId: 1,
            name: "},"
        }, {
            id: 32,
            pId: 1,
            name: ""
        }, {
            id: 40,
            pId: 1,
            t: "check",
            name: "check : {",
            open: !0
        }, {
            id: 405,
            pId: 40,
            t: "autoCheckTrigger",
            name: "autoCheckTrigger : false,",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 401,
            pId: 40,
            t: "chkboxType",
            name: 'chkboxType : {"Y": "ps", "N": "ps"},',
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 402,
            pId: 40,
            t: "chkStyle",
            name: 'chkStyle : "checkbox",',
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 403,
            pId: 40,
            t: "enable",
            name: "enable : false,",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 406,
            pId: 40,
            t: "nocheckInherit",
            name: "nocheckInherit : false",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 407,
            pId: 40,
            t: "chkDisabledInherit",
            name: "chkDisabledInherit : false",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 404,
            pId: 40,
            t: "radioType",
            name: 'radioType : "level"',
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 41,
            pId: 1,
            name: "},"
        }, {
            id: 42,
            pId: 1,
            name: ""
        }, {
            id: 50,
            pId: 1,
            t: "data",
            name: "data : {",
            open: !0
        }, {
            id: 500,
            pId: 50,
            t: "keep",
            name: "keep : {",
            open: !0
        }, {
            id: 5001,
            pId: 500,
            t: "leaf",
            name: "leaf : false,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 5002,
            pId: 500,
            t: "parent",
            name: "parent : false",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 501,
            pId: 50,
            name: "},"
        }, {
            id: 510,
            pId: 50,
            t: "key",
            name: "key : {",
            open: !0
        }, {
            id: 5101,
            pId: 510,
            t: "checked",
            name: 'checked : "checked",',
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 5102,
            pId: 510,
            t: "children",
            name: 'children : "children",',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 5106,
            pId: 510,
            t: "isParent",
            name: 'isParent : "isParent",',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 5107,
            pId: 510,
            t: "isHidden",
            name: 'isHidden : "isHidden",',
            iconSkin: "hide",
            showAPI: !0
        }, {
            id: 5103,
            pId: 510,
            t: "name",
            name: 'name : "name",',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 5104,
            pId: 510,
            t: "title",
            name: 'title : ""',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 5105,
            pId: 510,
            t: "url",
            name: 'url : "url"',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 511,
            pId: 50,
            name: "},"
        }, {
            id: 520,
            pId: 50,
            t: "simpleData",
            name: "simpleData : {",
            open: !0
        }, {
            id: 5201,
            pId: 520,
            t: "enable",
            name: "enable : false,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 5202,
            pId: 520,
            t: "idKey",
            name: 'idKey : "id",',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 5203,
            pId: 520,
            t: "pIdKey",
            name: 'pIdKey : "pId",',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 5204,
            pId: 520,
            t: "rootPId",
            name: "rootPId : null",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 521,
            pId: 50,
            name: "}"
        }, {
            id: 51,
            pId: 1,
            name: "},"
        }, {
            id: 52,
            pId: 1,
            name: ""
        }, {
            id: 60,
            pId: 1,
            t: "edit",
            name: "edit : {",
            open: !0
        }, {
            id: 601,
            pId: 60,
            t: "drag",
            name: "drag : {",
            open: !0
        }, {
            id: 60111,
            pId: 601,
            t: "autoExpandTrigger",
            name: "autoExpandTrigger : true,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 60101,
            pId: 601,
            t: "isCopy",
            name: "isCopy : true,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 60102,
            pId: 601,
            t: "isMove",
            name: "isMove : true,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 60103,
            pId: 601,
            t: "prev",
            name: "prev : true,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 60104,
            pId: 601,
            t: "next",
            name: "next : true,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 60105,
            pId: 601,
            t: "inner",
            name: "inner : true,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 60107,
            pId: 601,
            t: "borderMax",
            name: "borderMax : 10,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 60108,
            pId: 601,
            t: "borderMin",
            name: "borderMin : -5,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 60106,
            pId: 601,
            t: "minMoveSize",
            name: "minMoveSize : 5,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 60109,
            pId: 601,
            t: "maxShowNodeNum",
            name: "maxShowNodeNum : 5,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 60110,
            pId: 601,
            t: "autoOpenTime",
            name: "autoOpenTime : 500",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 602,
            pId: 60,
            name: "},"
        }, {
            id: 608,
            pId: 60,
            t: "editNameSelectAll",
            name: "editNameSelectAll : false,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 603,
            pId: 60,
            t: "enable",
            name: "enable : false,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 604,
            pId: 60,
            t: "removeTitle",
            name: 'removeTitle : "remove",',
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 605,
            pId: 60,
            t: "renameTitle",
            name: 'renameTitle : "rename",',
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 606,
            pId: 60,
            t: "showRemoveBtn",
            name: "showRemoveBtn : true,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 607,
            pId: 60,
            t: "showRenameBtn",
            name: "showRenameBtn : true",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 61,
            pId: 1,
            name: "},"
        }, {
            id: 62,
            pId: 1,
            name: ""
        }, {
            id: 70,
            pId: 1,
            t: "view",
            name: "view : {",
            open: !0
        }, {
            id: 7001,
            pId: 70,
            t: "addDiyDom",
            name: "addDiyDom : null,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7002,
            pId: 70,
            t: "addHoverDom",
            name: "addHoverDom : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 7003,
            pId: 70,
            t: "autoCancelSelected",
            name: "autoCancelSelected : true,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7004,
            pId: 70,
            t: "dblClickExpand",
            name: "dblClickExpand : true,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7005,
            pId: 70,
            t: "expandSpeed",
            name: 'expandSpeed : "fast",',
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7006,
            pId: 70,
            t: "fontCss",
            name: "fontCss : {},",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7014,
            pId: 70,
            t: "nodeClasses",
            name: "nodeClasses : {},",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7013,
            pId: 70,
            t: "nameIsHTML",
            name: "nameIsHTML : false,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7007,
            pId: 70,
            t: "removeHoverDom",
            name: "removeHoverDom : null,",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 7008,
            pId: 70,
            t: "selectedMulti",
            name: "selectedMulti : true,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7009,
            pId: 70,
            t: "showIcon",
            name: "showIcon : true,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7010,
            pId: 70,
            t: "showLine",
            name: "showLine : true,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7011,
            pId: 70,
            t: "showTitle",
            name: "showTitle : true,",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 7012,
            pId: 70,
            t: "txtSelectedEnable",
            name: "txtSelectedEnable : false",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 71,
            pId: 1,
            name: "}"
        }, {
            id: 2,
            pId: 0,
            name: "}"
        }]),
        apiContent.zTree_Node = $.fn.zTree.init($("#treenodeTree"), $.fn.zTree._z.tools.clone(e), [{
            id: 1,
            pId: 0,
            t: "treeNode",
            name: "treeNode : {",
            open: !0
        }, {
            id: 101,
            pId: 1,
            t: "checked",
            name: "checked",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 102,
            pId: 1,
            t: "children",
            name: "children",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 128,
            pId: 1,
            t: "chkDisabled",
            name: "chkDisabled",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 127,
            pId: 1,
            t: "click",
            name: "click",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 103,
            pId: 1,
            t: "getCheckStatus",
            name: "getCheckStatus ()",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 135,
            pId: 1,
            t: "getIndex",
            name: "getIndex ()",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 104,
            pId: 1,
            t: "getNextNode",
            name: "getNextNode ()",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 105,
            pId: 1,
            t: "getParentNode",
            name: "getParentNode ()",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 136,
            pId: 1,
            t: "getPath",
            name: "getPath ()",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 106,
            pId: 1,
            t: "getPreNode",
            name: "getPreNode ()",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 129,
            pId: 1,
            t: "halfCheck",
            name: "halfCheck",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 107,
            pId: 1,
            t: "icon",
            name: "icon",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 108,
            pId: 1,
            t: "iconClose",
            name: "iconClose",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 109,
            pId: 1,
            t: "iconOpen",
            name: "iconOpen",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 110,
            pId: 1,
            t: "iconSkin",
            name: "iconSkin",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 131,
            pId: 1,
            t: "isHidden",
            name: "isHidden",
            iconSkin: "hide",
            showAPI: !0
        }, {
            id: 111,
            pId: 1,
            t: "isParent",
            name: "isParent",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 132,
            pId: 1,
            t: "name",
            name: "name",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 112,
            pId: 1,
            t: "nocheck",
            name: "nocheck",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 113,
            pId: 1,
            t: "open",
            name: "open",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 133,
            pId: 1,
            t: "target",
            name: "target",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 134,
            pId: 1,
            t: "url",
            name: "url",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 114,
            pId: 1,
            t: "diy",
            name: "*DIY*",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 115,
            pId: 1,
            name: ""
        }, {
            id: 116,
            pId: 1,
            t: "check_Child_State",
            name: "[check_Child_State]",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 117,
            pId: 1,
            t: "check_Focus",
            name: "[check_Focus]",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 118,
            pId: 1,
            t: "checkedOld",
            name: "[checkedOld]",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 119,
            pId: 1,
            t: "editNameFlag",
            name: "[editNameFlag]",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 120,
            pId: 1,
            t: "isAjaxing",
            name: "[isAjaxing]",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 121,
            pId: 1,
            t: "isFirstNode",
            name: "[isFirstNode]",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 122,
            pId: 1,
            t: "isHover",
            name: "[isHover]",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 123,
            pId: 1,
            t: "isLastNode",
            name: "[isLastNode]",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 124,
            pId: 1,
            t: "level",
            name: "[level]",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 125,
            pId: 1,
            t: "parentTId",
            name: "[parentTId]",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 126,
            pId: 1,
            t: "tId",
            name: "[tId]",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 130,
            pId: 1,
            t: "zAsync",
            name: "[zAsync]",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 2,
            pId: 0,
            name: "}"
        }]),
        apiContent.zTree_Function = $.fn.zTree.init($("#functionTree"), $.fn.zTree._z.tools.clone(e), [{
            id: 1,
            pId: 0,
            t: "$.fn.zTree",
            name: "$.fn.zTree : {",
            open: !0
        }, {
            id: 11,
            pId: 1,
            t: "init",
            name: "init (obj, zSetting, zNodes)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 12,
            pId: 1,
            t: "getZTreeObj",
            name: "getZTreeObj (treeId)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 14,
            pId: 1,
            t: "destroy",
            name: "destroy (treeId)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 13,
            pId: 1,
            t: "_z",
            name: "_z : {tools, view, event, data}",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 2,
            pId: 0,
            name: "}"
        }, {
            id: 3,
            pId: 0,
            name: ""
        }, {
            id: 4,
            pId: 0,
            t: "zTreeObj",
            name: "zTreeObj : {",
            open: !0
        }, {
            id: 401,
            pId: 4,
            t: "setting",
            name: "setting",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 402,
            pId: 4,
            t: "addNodes",
            name: "addNodes (parentNode, index, newNodes, isSilent)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 403,
            pId: 4,
            t: "cancelEditName",
            name: "cancelEditName (newName)",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 404,
            pId: 4,
            t: "cancelSelectedNode",
            name: "cancelSelectedNode (node)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 405,
            pId: 4,
            t: "checkAllNodes",
            name: "checkAllNodes (checked)",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 406,
            pId: 4,
            t: "checkNode",
            name: "checkNode (node, checked, checkTypeFlag, callbackFlag)",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 407,
            pId: 4,
            t: "copyNode",
            name: "copyNode (targetNode, node, moveType, isSilent)",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 436,
            pId: 4,
            t: "destroy",
            name: "destroy ()",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 408,
            pId: 4,
            t: "editName",
            name: "editName (node)",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 409,
            pId: 4,
            t: "expandAll",
            name: "expandAll (expandFlag)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 410,
            pId: 4,
            t: "expandNode",
            name: "expandNode (node, expandFlag, sonSign, focus, callbackFlag)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 411,
            pId: 4,
            t: "getChangeCheckedNodes",
            name: "getChangeCheckedNodes ()",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 412,
            pId: 4,
            t: "getCheckedNodes",
            name: "getCheckedNodes (checked)",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 413,
            pId: 4,
            t: "getNodeByParam",
            name: "getNodeByParam (key, value, parentNode)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 414,
            pId: 4,
            t: "getNodeByTId",
            name: "getNodeByTId (tId)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 415,
            pId: 4,
            t: "getNodeIndex",
            name: "getNodeIndex (node)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 416,
            pId: 4,
            t: "getNodes",
            name: "getNodes ()",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 431,
            pId: 4,
            t: "getNodesByFilter",
            name: "getNodesByFilter (filter, isSingle, parentNode, invokeParam)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 417,
            pId: 4,
            t: "getNodesByParam",
            name: "getNodesByParam (key, value, parentNode)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 418,
            pId: 4,
            t: "getNodesByParamFuzzy",
            name: "getNodesByParamFuzzy (key, value, parentNode)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 419,
            pId: 4,
            t: "getSelectedNodes",
            name: "getSelectedNodes ()",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 432,
            pId: 4,
            t: "hideNode",
            name: "hideNode (node)",
            iconSkin: "hide",
            showAPI: !0
        }, {
            id: 433,
            pId: 4,
            t: "hideNodes",
            name: "hideNodes (nodes)",
            iconSkin: "hide",
            showAPI: !0
        }, {
            id: 420,
            pId: 4,
            t: "moveNode",
            name: "moveNode (targetNode, node, moveType, isSilent)",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 421,
            pId: 4,
            t: "reAsyncChildNodes",
            name: "reAsyncChildNodes (parentNode, reloadType, isSilent, callback)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 437,
            pId: 4,
            t: "reAsyncChildNodesPromise",
            name: "reAsyncChildNodesPromise(parentNode, reloadType, isSilent)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 422,
            pId: 4,
            t: "refresh",
            name: "refresh ()",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 423,
            pId: 4,
            t: "removeChildNodes",
            name: "removeChildNodes (parentNode)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 424,
            pId: 4,
            t: "removeNode",
            name: "removeNode (node, callbackFlag)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 425,
            pId: 4,
            t: "selectNode",
            name: "selectNode (node, addFlag, isSilent)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 430,
            pId: 4,
            t: "setChkDisabled",
            name: "setChkDisabled (node, disabled, inheritParent, inheritChildren)",
            iconSkin: "check",
            showAPI: !0
        }, {
            id: 426,
            pId: 4,
            t: "setEditable",
            name: "setEditable (editable)",
            iconSkin: "edit",
            showAPI: !0
        }, {
            id: 434,
            pId: 4,
            t: "showNode",
            name: "showNode (node)",
            iconSkin: "hide",
            showAPI: !0
        }, {
            id: 435,
            pId: 4,
            t: "showNodes",
            name: "showNodes (nodes)",
            iconSkin: "hide",
            showAPI: !0
        }, {
            id: 427,
            pId: 4,
            t: "transformToArray",
            name: "transformToArray (nodes)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 428,
            pId: 4,
            t: "transformTozTreeNodes",
            name: "transformTozTreeNodes (simpleNodes)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 429,
            pId: 4,
            t: "updateNode",
            name: "updateNode (node, checkTypeFlag)",
            iconSkin: "core",
            showAPI: !0
        }, {
            id: 5,
            pId: 0,
            name: "}"
        }]),
        this.bindEvent()
    },
    bindEvent: function() {
        $(document).bind("keydown", this.listenKeyDown),
        this.overlayCloseBtn.bind("click", apiContent.overlayClose),
        this.searchResultInput.bind("click", function(e) {
            $(this).prev().get(0).focus(),
            this.blur()
        }).bind("focus", function(e) {
            this.blur()
        }),
        this.searchKey.bind("focus", this.focusKey).bind("blur", this.blurKey).bind("propertychange", this.searchNode).bind("input", this.searchNode),
        this.searchPrevBtn.bind("click", this.searchPrev),
        this.searchNextBtn.bind("click", this.searchNext)
    },
    setSameKey: function(e) {
        apiContent.searchKey.attr("value", e)
    },
    focusKey: function(e) {
        apiContent.searchKey.hasClass("empty") && apiContent.searchKey.removeClass("empty")
    },
    blurKey: function(e) {
        apiContent.setSameKey(e.target.value),
        "" === e.target.value && apiContent.searchKey.addClass("empty")
    },
    listenKeyDown: function(e) {
        "13" == e.keyCode && apiContent.overlayDiv.is(":hidden") ? apiContent.openAPI() : "37" == e.keyCode ? apiContent.searchPrev() : "13" != e.keyCode && "39" != e.keyCode || apiContent.searchNext()
    },
    openAPI: function() {
        if (0 < apiContent.searchNodes.length) {
            var e = $.fn.zTree.getZTreeObj("settingTree")
              , n = $.fn.zTree.getZTreeObj("treenodeTree")
              , o = $.fn.zTree.getZTreeObj("functionTree");
            (apiContent.searchNodesCur < 0 || apiContent.searchNodesCur > apiContent.searchNodes.length - 1) && (apiContent.searchNodesCur = 0);
            var i = apiContent.searchNodes[apiContent.searchNodesCur];
            -1 < i.tId.indexOf("setting") ? e.selectNode(i) : -1 < i.tId.indexOf("treenode") ? n.selectNode(i) : o.selectNode(i),
            apiContent.beforeClick(i.tId.substring(0, i.tId.indexOf("_")), i, !0),
            apiContent.searchCur()
        }
    },
    searchNode: function(e) {
        var n = $.fn.zTree.getZTreeObj("settingTree")
          , o = $.fn.zTree.getZTreeObj("treenodeTree")
          , i = $.fn.zTree.getZTreeObj("functionTree");
        if (apiContent.curKey != e.target.value) {
            apiContent.curKey = e.target.value;
            var t = $.trim(apiContent.curKey);
            if (apiContent.setSameKey(apiContent.curKey),
            apiContent.searchKey.hasClass("empty") && (t = "",
            apiContent.searchResultInput.removeClass("noResult").attr("value", "")),
            apiContent.lastValue !== t) {
                if (apiContent.updateNodes(!1),
                "" === (apiContent.lastValue = t) || t.length < 2)
                    return apiContent.searchNodes = [],
                    apiContent.searchNodesCur = -1,
                    void apiContent.searchCur(!0);
                var d = n.getNodesByFilter(apiContent.searchFilter)
                  , a = i.getNodesByFilter(apiContent.searchFilter)
                  , c = o.getNodesByFilter(apiContent.searchFilter);
                apiContent.searchNodes = d.concat(a).concat(c),
                apiContent.searchNodesCur = -1,
                apiContent.searchCur(),
                apiContent.updateNodes(!0)
            }
        }
    },
    searchFilter: function(e) {
        var n = $.trim(apiContent.searchKey.get(0).value).toLowerCase();
        return e.showAPI && -1 < e.name.toLowerCase().indexOf(n)
    },
    searchPrev: function(e) {
        apiContent.searchPrevBtn.hasClass("disabled") || (apiContent.searchNodesCur--,
        (apiContent.searchNodesCur < 0 || apiContent.searchNodesCur > apiContent.searchNodes.length - 1) && (apiContent.searchNodesCur = apiContent.searchNodes.length - 1),
        apiContent.openAPI())
    },
    searchNext: function(e) {
        apiContent.searchNextBtn.hasClass("disabled") || (apiContent.searchNodesCur++,
        apiContent.openAPI())
    },
    searchCur: function(e) {
        var n = apiContent.searchNodes;
        e ? apiContent.searchResultInput.removeClass("noResult").attr("value", "") : 0 == n.length ? apiContent.searchResultInput.addClass("noResult").attr("value", "  [ 0 / 0 ]  ") : apiContent.searchResultInput.removeClass("noResult").attr("value", " [ " + (-1 < apiContent.searchNodesCur ? apiContent.searchNodesCur + 1 : "?") + " / " + n.length + " ] "),
        0 < n.length ? (apiContent.searchPrevBtn.removeClass("disabled"),
        apiContent.searchNextBtn.removeClass("disabled")) : (apiContent.searchPrevBtn.addClass("disabled"),
        apiContent.searchNextBtn.addClass("disabled"))
    },
    updateNodes: function(e) {
        for (var n = $.fn.zTree.getZTreeObj("settingTree"), o = $.fn.zTree.getZTreeObj("treenodeTree"), i = $.fn.zTree.getZTreeObj("functionTree"), t = null, d = 0, a = apiContent.searchNodes.length; d < a; d++)
            0 < (t = apiContent.searchNodes[d]).level && (t.highlight = e,
            -1 < t.tId.indexOf("setting") ? n.updateNode(t) : -1 < t.tId.indexOf("treenode") ? o.updateNode(t) : i.updateNode(t))
    },
    getFontCss: function(e, n) {
        return n.highlight ? {
            color: "#A60000",
            "font-weight": "bold"
        } : {
            color: "#333",
            "font-weight": "normal"
        }
    },
    getTitle: function(e, n) {
        for (var o = [], i = n; i && i.t; )
            o.push(i.t),
            i = i.getParentNode();
        return o = o.reverse(),
        n.tt = o.join("."),
        !0
    },
    showIcon: function(e, n) {
        return !!n.iconSkin
    },
    onNodeCreated: function(e, n, o) {
        var i = $("#" + o.tId + "_a");
        o.showAPI ? i.attr("rel", "#overlayDiv") : i.css({
            cursor: "default"
        })
    },
    beforeClick: function(e, n, o) {
        if (!n.showAPI)
            return !1;
        var i = $("#" + n.tId + "_a");
        return apiContent.apiCache[n.tId] ? (apiContent.tmpDiv.html(apiContent.apiCache[n.tId]),
        apiContent.overlayShow(i, apiContent.lastNode === n)) : apiContent.overlayAjax(e, n),
        -1 < (apiContent.lastNode = n).tId.indexOf("settingTree") ? (apiContent.settingDiv.removeClass("right").addClass("left"),
        apiContent.functionDiv.removeClass("left").addClass("right")) : (apiContent.settingDiv.removeClass("left").addClass("right"),
        apiContent.functionDiv.removeClass("right").addClass("left")),
        o || apiContent.clearSelectedNode(),
        !0
    },
    clearSelectedNode: function() {
        apiContent.zTree_Setting.cancelSelectedNode(),
        apiContent.zTree_Node.cancelSelectedNode(),
        apiContent.zTree_Function.cancelSelectedNode()
    },
    overlayAutoClose: function(e) {
        var n = e.target.id
          , o = e.target.getAttribute("rel")
          , i = e.target.className;
        "overlayDiv" === n || "overlayDivArrow" === n || -1 < i.indexOf("searchPrev") || -1 < i.indexOf("searchNext") || o || $(e.target).parents("[rel]").length || $(e.target).parents("#overlayDiv").length || apiContent.overlayClose()
    },
    overlayClose: function() {
        var e = apiContent.overlayDiv;
        e.stop(),
        apiContent.clearSelectedNode(),
        ie ? e.hide() : setTimeout(function() {
            e.fadeTo("fast", 0, function() {
                e.hide()
            })
        }, 200),
        $(document).unbind("click", apiContent.overlayAutoClose)
    },
    overlayShow: function(e, n) {
        var o = $(window)
          , i = apiContent.overlayDiv
          , t = apiContent.overlayArrow
          , d = apiContent.overlayContent
          , a = apiContent.contentBoxDiv
          , c = e.offset().top - 30
          , s = a.offset().left + a.outerWidth({
            margin: !0
        }) - i.outerWidth({
            margin: !0
        }) - 10
          , r = Math.min(s, e.offset().left + e.width() + 40)
          , l = e.offset().top + 16
          , p = !1
          , h = o.height()
          , I = o.scrollTop()
          , m = h + I - 50;
        apiContent.overlayMaxTop || (apiContent.overlayMaxTop = apiContent.contentBoxDiv.offset().top + apiContent.contentBoxDiv.height()),
        i.stop(),
        "block" !== i.css("display") && (i.css({
            top: c,
            left: r
        }),
        t.css({
            top: l - c
        }),
        $(document).bind("click", apiContent.overlayAutoClose)),
        ie ? (p = !0,
        i.show()) : i.fadeTo("fast", 1);
        var k = apiContent.tmpDiv.outerHeight({
            margin: !0
        }) + apiContent.overlaySearch.outerHeight();
        m < c + k && (c = m - k),
        c + k > apiContent.overlayMaxTop && (c = apiContent.overlayMaxTop - k),
        (c = Math.max(c, I, 100)) + k > $("body").height() - 50 - 20 ? i.css("padding-bottom", "50px") : i.css("padding-bottom", "0"),
        apiContent.overlayDetailDiv.empty(),
        apiContent.overlayDetailDiv.append(apiContent.tmpDiv.children()),
        p = p || n && c === parseInt(i.css("top").replace("px", "")),
        t.removeClass("reverse"),
        k - 55 < l - c && (t.addClass("reverse"),
        l -= 55),
        p ? (i.css({
            top: c,
            left: r
        }),
        d.css({
            height: k
        }),
        t.css({
            top: l - c
        })) : (i.animate({
            top: c,
            left: r
        }, {
            duration: "normal",
            easing: "swing",
            complete: null
        }),
        d.animate({
            height: k
        }, {
            duration: "fast",
            easing: "swing",
            complete: null
        }),
        t.animate({
            top: l - c
        }, {
            duration: "normal",
            easing: "linear",
            complete: null
        }))
    },
    overlayAjax: function(e, i) {
        var o = $("#" + i.tId + "_a");
        i.isAjax || (i.isAjax = !0,
        $.ajax({
            type: "get",
            url: "api/" + lang + "/" + i.tt.replace("$.", "") + ".html",
            data: null,
            dataType: "text",
            success: function(e) {
                if (apiContent.tmpDiv)
                    apiContent.tmpDiv.empty();
                else {
                    var n = $(document.createElement("div"));
                    n.addClass("baby_overlay_tmp"),
                    $("body").append(n),
                    apiContent.tmpDiv = $(document.createElement("div")),
                    apiContent.tmpDiv.addClass("details"),
                    n.append(apiContent.tmpDiv)
                }
                apiContent.tmpDiv.html(e),
                apiContent.overlayShow(o, !1),
                apiContent.apiCache[i.tId] = e,
                i.isAjax = !1
            },
            error: function(e, n, o) {
                apiContent.tmpDiv && apiContent.tmpDiv.empty(),
                i.isAjax = !1
            }
        }))
    }
};
