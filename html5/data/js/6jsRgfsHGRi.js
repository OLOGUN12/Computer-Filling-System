window.globalProvideData('slide', '{"title":"Drag and Drop","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":31,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide31","width":720,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":0,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6jsRgfsHGRi","actionGroups":{"ReviewInt_5qL9DM6V8Ps":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ouf6h9KXPw"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5pzsedL9g1C"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6OcLerw2jri"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6R5d5lGRV90"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T2vvruzrV8"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5e1ARHea1q1"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_5qL9DM6V8Ps":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ouf6h9KXPw"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5pzsedL9g1C"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6OcLerw2jri"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6R5d5lGRV90"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T2vvruzrV8"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5e1ARHea1q1"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5qL9DM6V8Ps":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5qL9DM6V8Ps"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_5qL9DM6V8Ps":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5ouf6h9KXPw"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5pzsedL9g1C"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6OcLerw2jri"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6R5d5lGRV90"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6T2vvruzrV8"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5e1ARHea1q1"},"enabled":{"type":"boolean","value":false}}]},"5qL9DM6V8Ps_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5syqaf6YW5D.$Status","typea":"property","valueb":"correct","typeb":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5qL9DM6V8Ps"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5syqaf6YW5D.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5syqaf6YW5D.$AttemptCount","typea":"property","valueb":10000,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5qL9DM6V8Ps"}]}]}]}]},"NavigationRestrictionNextSlide_6jsRgfsHGRi":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5kJlnP2umYC"}}]},"NavigationRestrictionPreviousSlide_6jsRgfsHGRi":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000101"}]}]},{"kind":"ontimelinecomplete","actions":[{"kind":"adjustvar","variable":"_player.DRILLCORRECT","operator":"add","value":{"type":"var","value":"_player.#DRILLQ31"}}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ux5SPdH7NM","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ux5SPdH7NM","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"5qL9DM6V8Ps_CheckAnswered"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5qL9DM6V8Ps","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5kJlnP2umYC"}}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5qL9DM6V8Ps","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5kJlnP2umYC"}}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6jsRgfsHGRi"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6jsRgfsHGRi"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":284,"id":"5hZ25CgVlxZ","events":[{"kind":"onmediacomplete","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"gte","valuea":"_player.#DRILLQ31","typea":"var","valueb":3,"typeb":"number"}]}]}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.68qBVgGJOhs.5kJlnP2umYC"}}]}]}]},{"kind":"audio","assetId":285,"id":"65HDw4hZhtE"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":15699,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6mYAiBJjNWK"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6CN02y7PIOx"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5ouf6h9KXPw"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6T2vvruzrV8"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5e1ARHea1q1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6OcLerw2jri"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5pzsedL9g1C"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6R5d5lGRV90"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5w17SiRbSOF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6kiZdEGT8Yv"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5zc4DyfrS4z"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"66tJRrWSoYd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6msu8HG4Y3a"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6Vby33jHZPM_80_DX1440_DY1440.jpg","type":"normal","altText":"Image 1.jpg","width":1440,"height":964,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":-2,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":272,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":544,"altText":"Image 1.jpg","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":544,"strokewidth":0}},"width":720,"height":544,"resume":true,"useHandCursor":true,"id":"5zc4DyfrS4z"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":-2,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":276,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":552,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":552,"strokewidth":0}},"width":720,"height":552,"resume":true,"useHandCursor":true,"id":"66tJRrWSoYd"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"ondoubleclick","textLib":[{"kind":"textdata","uniqueId":"6msu8HG4Y3a_-2081262999","id":"01","linkId":"txt__default_6msu8HG4Y3a","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":64,"bottom":28,"pngfb":false,"pr":{"l":"Lib","i":3}}}],"shapemaskId":"","xPos":640,"yPos":-2,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":39.5,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":81,"bottom":33,"altText":"EXIT","pngfb":false,"pr":{"l":"Lib","i":2}},"html5data":{"xPos":0,"yPos":0,"width":80,"height":32,"strokewidth":2}},"width":80,"height":32,"resume":true,"useHandCursor":true,"id":"6msu8HG4Y3a","events":[{"kind":"ondoubleclick","actions":[{"kind":"close_player"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6mYAiBJjNWK_-1281550615","id":"01","linkId":"txt__default_6mYAiBJjNWK","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":605,"bottom":79,"pngfb":false,"pr":{"l":"Lib","i":765}}}],"shapemaskId":"","xPos":64,"yPos":62,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":303.5,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":609,"bottom":85,"altText":"Drag and Drop appropriate method of accessing computer file.","pngfb":false,"pr":{"l":"Lib","i":486}},"html5data":{"xPos":0,"yPos":0,"width":608,"height":84,"strokewidth":1}},"width":608,"height":84,"resume":true,"useHandCursor":true,"id":"6mYAiBJjNWK"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6CN02y7PIOx_-1916928395","id":"01","linkId":"txt__default_6CN02y7PIOx","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":57,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":65}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":35.5,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":73,"bottom":33,"altText":"Home","pngfb":false,"pr":{"l":"Lib","i":64}},"html5data":{"xPos":0,"yPos":0,"width":72,"height":32,"strokewidth":1}},"width":72,"height":32,"resume":true,"useHandCursor":true,"id":"6CN02y7PIOx","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6dSFott6Kgf.5iuoQ7X4Y8e"}}]}]},{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6eh4a5Jc1Rk_-171215663","id":"01","linkId":"txt__default_5ouf6h9KXPw","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":159,"bottom":43,"pngfb":false,"pr":{"l":"Lib","i":767}}}],"shapemaskId":"","xPos":480,"yPos":389,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":96,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":96,"snapy":26,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["5ouf6h9KXPw","_drop_5jOG2BfUvPG"],"dragoverids":["_group1","_drop_5jOG2BfUvPG"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":192,"bottom":53,"altText":"Sequential","pngfb":false,"pr":{"l":"Lib","i":766}},"html5data":{"xPos":0,"yPos":0,"width":192,"height":53,"strokewidth":0}},"animations":[{"kind":"animation","id":"5eweBkx6leN","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"480","y":"389","dx":"0","dy":"0"},"anchorb":{"x":"2634","y":"394.5","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":192,"height":53,"resume":true,"useHandCursor":true,"id":"5ouf6h9KXPw","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ondragconnect","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"5w17SiRbSOF","typeb":"string"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.DRILLQ31","operator":"add","value":{"type":"number","value":1}}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"5w17SiRbSOF","typeb":"string"}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.5hZ25CgVlxZ"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.5hZ25CgVlxZ"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6ojvmtO3fgO_-63174032","id":"01","linkId":"txt__default_6T2vvruzrV8","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":142,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":769}}}],"shapemaskId":"","xPos":40,"yPos":466,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":92,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":92,"snapy":25,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6hky7jAAsK4"],"dragoverids":["_drop_6hky7jAAsK4"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":184,"bottom":50,"altText":"Forward","pngfb":false,"pr":{"l":"Lib","i":768}},"html5data":{"xPos":0,"yPos":0,"width":184,"height":50,"strokewidth":0}},"animations":[{"kind":"animation","id":"6UISwhtaPMS","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"44","y":"465","dx":"0","dy":"0"},"anchorb":{"x":"-1948","y":"489","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":184,"height":50,"resume":true,"useHandCursor":true,"id":"6T2vvruzrV8","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"onrelease","actions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.65HDw4hZhtE"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.65HDw4hZhtE"}},{"kind":"adjustvar","variable":"_player.DRILLWRONG","operator":"add","value":{"type":"number","value":1}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5lSXj5c9WyO_-1610599488","id":"01","linkId":"txt__default_5e1ARHea1q1","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":150,"bottom":43,"pngfb":false,"pr":{"l":"Lib","i":771}}}],"shapemaskId":"","xPos":280,"yPos":466,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":100,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":100,"snapy":26,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["5e1ARHea1q1","_drop_6CxrJdmv9Kq"],"dragoverids":["_group1","_drop_6CxrJdmv9Kq"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":200,"bottom":53,"altText":"Random","pngfb":false,"pr":{"l":"Lib","i":770}},"html5data":{"xPos":0,"yPos":0,"width":200,"height":53,"strokewidth":0}},"animations":[{"kind":"animation","id":"6BGd5VxYB3e","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"280","y":"466","dx":"0","dy":"0"},"anchorb":{"x":"2434","y":"471.5","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":200,"height":53,"resume":true,"useHandCursor":true,"id":"5e1ARHea1q1","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ondragconnect","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"5w17SiRbSOF","typeb":"string"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.DRILLQ31","operator":"add","value":{"type":"number","value":1}}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"5w17SiRbSOF","typeb":"string"}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.5hZ25CgVlxZ"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.5hZ25CgVlxZ"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6aZ2hPxdySh_280169847","id":"01","linkId":"txt__default_6OcLerw2jri","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":100,"bottom":43,"pngfb":false,"pr":{"l":"Lib","i":773}}}],"shapemaskId":"","xPos":40,"yPos":395,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":64,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":64,"snapy":26,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["6OcLerw2jri","_drop_5vy7ppxXFn1"],"dragoverids":["_group1","_drop_5vy7ppxXFn1"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":128,"bottom":53,"altText":"Direct","pngfb":false,"pr":{"l":"Lib","i":772}},"html5data":{"xPos":0,"yPos":0,"width":128,"height":53,"strokewidth":0}},"animations":[{"kind":"animation","id":"6l38Wlp4xyL","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"40","y":"395","dx":"0","dy":"0"},"anchorb":{"x":"2194","y":"400.5","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":128,"height":53,"resume":true,"useHandCursor":true,"id":"6OcLerw2jri","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ondragconnect","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"5w17SiRbSOF","typeb":"string"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.DRILLQ31","operator":"add","value":{"type":"number","value":1}}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"5w17SiRbSOF","typeb":"string"}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.5hZ25CgVlxZ"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.5hZ25CgVlxZ"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"67A0wszzauM_-510837436","id":"01","linkId":"txt__default_5pzsedL9g1C","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":135,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":775}}}],"shapemaskId":"","xPos":312,"yPos":390,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":76,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":76,"snapy":25,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6BWnn1nr4ze"],"dragoverids":["_drop_6BWnn1nr4ze"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":152,"bottom":50,"altText":"Backward","pngfb":false,"pr":{"l":"Lib","i":774}},"html5data":{"xPos":0,"yPos":0,"width":152,"height":50,"strokewidth":0}},"animations":[{"kind":"animation","id":"5W7iFwcJx6W","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"316","y":"389","dx":"0","dy":"0"},"anchorb":{"x":"-1676","y":"413","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":152,"height":50,"resume":true,"useHandCursor":true,"id":"5pzsedL9g1C","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"onrelease","actions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.65HDw4hZhtE"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.65HDw4hZhtE"}},{"kind":"adjustvar","variable":"_player.DRILLWRONG","operator":"add","value":{"type":"number","value":1}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6eR0mB4suio_-2093791502","id":"01","linkId":"txt__default_6R5d5lGRV90","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":140,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":777}}}],"shapemaskId":"","xPos":496,"yPos":461,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":96,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":96,"snapy":25,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6XfFGHuOlhD"],"dragoverids":["_drop_6XfFGHuOlhD"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":192,"bottom":50,"altText":"Sidebar","pngfb":false,"pr":{"l":"Lib","i":776}},"html5data":{"xPos":0,"yPos":0,"width":192,"height":50,"strokewidth":0}},"animations":[{"kind":"animation","id":"6cH4DUuG4fX","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"500","y":"460","dx":"0","dy":"0"},"anchorb":{"x":"-1492","y":"484","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":192,"height":50,"resume":true,"useHandCursor":true,"id":"6R5d5lGRV90","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"onrelease","actions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.65HDw4hZhtE"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.65HDw4hZhtE"}},{"kind":"adjustvar","variable":"_player.DRILLWRONG","operator":"add","value":{"type":"number","value":1}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]}],"shuffle":true,"depth":6,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":576,"yPos":416,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":1077,"rotateYPos":3,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":2154,"height":6,"resume":true,"useHandCursor":true,"id":"5eweBkx6leN"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-1856,"yPos":490,"tabIndex":19,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":996,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":1992,"height":24,"resume":true,"useHandCursor":true,"id":"6UISwhtaPMS"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":380,"yPos":492,"tabIndex":20,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":1077,"rotateYPos":3,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":2154,"height":6,"resume":true,"useHandCursor":true,"id":"6BGd5VxYB3e"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":104,"yPos":422,"tabIndex":17,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":1077,"rotateYPos":3,"scaleX":100,"scaleY":100,"alpha":100,"depth":15,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":2154,"height":6,"resume":true,"useHandCursor":true,"id":"6l38Wlp4xyL"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-1600,"yPos":414,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":996,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":16,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":1992,"height":24,"resume":true,"useHandCursor":true,"id":"5W7iFwcJx6W"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-1396,"yPos":485,"tabIndex":18,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":996,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":17,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":1992,"height":24,"resume":true,"useHandCursor":true,"id":"6cH4DUuG4fX"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":72,"yPos":166,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":300,"rotateYPos":84,"scaleX":100,"scaleY":100,"alpha":100,"depth":18,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":300,"snapy":84,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["5ouf6h9KXPw","5e1ARHea1q1","6OcLerw2jri","6kiZdEGT8Yv","_drop_6CxrJdmv9Kq","_drop_5vy7ppxXFn1","_drop_5jOG2BfUvPG"],"dragoverids":["_group1","_drop_6CxrJdmv9Kq","_drop_5vy7ppxXFn1","_drop_5jOG2BfUvPG"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":601,"bottom":169,"altText":"Rectangle 16","pngfb":false,"pr":{"l":"Lib","i":778}},"html5data":{"xPos":0,"yPos":0,"width":600,"height":168,"strokewidth":2}},"width":600,"height":168,"resume":true,"useHandCursor":true,"id":"5w17SiRbSOF"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5sRhdcifT91_1186917287","id":"01","linkId":"txt__default_6kiZdEGT8Yv","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":89,"bottom":43,"pngfb":false,"pr":{"l":"Lib","i":780}}}],"shapemaskId":"","xPos":184,"yPos":390,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":56,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":19,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":56,"snapy":26,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["6kiZdEGT8Yv"],"dragoverids":["_group1"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":112,"bottom":53,"altText":"Serial","pngfb":false,"pr":{"l":"Lib","i":779}},"html5data":{"xPos":0,"yPos":0,"width":112,"height":53,"strokewidth":0}},"animations":[{"kind":"animation","id":"5qc08WJ82mU","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"184","y":"390","dx":"0","dy":"0"},"anchorb":{"x":"2338","y":"395.5","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":112,"height":53,"resume":true,"useHandCursor":true,"id":"6kiZdEGT8Yv","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ondragconnect","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"5w17SiRbSOF","typeb":"string"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.DRILLQ31","operator":"add","value":{"type":"number","value":1}}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"5w17SiRbSOF","typeb":"string"}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.5hZ25CgVlxZ"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.5hZ25CgVlxZ"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":240,"yPos":416,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":1077,"rotateYPos":3,"scaleX":100,"scaleY":100,"alpha":100,"depth":20,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":2154,"height":6,"resume":true,"useHandCursor":true,"id":"5qc08WJ82mU"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');