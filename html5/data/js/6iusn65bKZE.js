window.globalProvideData('slide', '{"title":"Drag and Drop","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":32,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide32","width":720,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":0,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6iusn65bKZE","actionGroups":{"ReviewInt_6VEQESTQGnY":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6WCzGAu2vIF"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Y400khPMcS"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6H7sRsRt2My"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5x3LUWVtrSP"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6FD9BiZmZ5Y"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6bzBlWGrlpJ"},"enabled":{"type":"boolean","value":false}}]},"ReviewIntCorrectIncorrect_6VEQESTQGnY":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6WCzGAu2vIF"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Y400khPMcS"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6H7sRsRt2My"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5x3LUWVtrSP"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6FD9BiZmZ5Y"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6bzBlWGrlpJ"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6VEQESTQGnY":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6VEQESTQGnY"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_6VEQESTQGnY":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6WCzGAu2vIF"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5Y400khPMcS"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6H7sRsRt2My"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5x3LUWVtrSP"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6FD9BiZmZ5Y"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"6bzBlWGrlpJ"},"enabled":{"type":"boolean","value":false}}]},"6VEQESTQGnY_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6kckJ5hx33s.$Status","typea":"property","valueb":"correct","typeb":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6VEQESTQGnY"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6kckJ5hx33s.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6kckJ5hx33s.$AttemptCount","typea":"property","valueb":10000,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6VEQESTQGnY"}]}]}]}]},"NavigationRestrictionNextSlide_6iusn65bKZE":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6pwlwCV8TMu"}}]},"NavigationRestrictionPreviousSlide_6iusn65bKZE":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000101"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ux5SPdH7NM","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5ux5SPdH7NM","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"exe_actiongroup","id":"6VEQESTQGnY_CheckAnswered"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6VEQESTQGnY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6pwlwCV8TMu"}}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6VEQESTQGnY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6pwlwCV8TMu"}}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6iusn65bKZE"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6iusn65bKZE"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":126,"id":"5q4m7n97hGT","events":[{"kind":"onmediacomplete","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"and","statements":[{"kind":"compare","operator":"gte","valuea":"_player.#M2L3P","typea":"var","valueb":9,"typeb":"number"}]}]}},"thenActions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5c7FSl6AnXz.6pwlwCV8TMu"}}]}]}]},{"kind":"audio","assetId":127,"id":"6Q87elFRSVS"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":15699,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5jEulXi8bYu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6HJtOBtya91"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WCzGAu2vIF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6FD9BiZmZ5Y"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6bzBlWGrlpJ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6H7sRsRt2My"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Y400khPMcS"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5x3LUWVtrSP"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6cbtMuYknef"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5zc4DyfrS4z"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"66tJRrWSoYd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6msu8HG4Y3a"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":1,"id":"01","url":"story_content/6Vby33jHZPM_80_DX1440_DY1440.jpg","type":"normal","altText":"Image 1.jpg","width":1440,"height":964,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":-2,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":272,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":544,"altText":"Image 1.jpg","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":544,"strokewidth":0}},"width":720,"height":544,"resume":true,"useHandCursor":true,"id":"5zc4DyfrS4z"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":-2,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":276,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":552,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":552,"strokewidth":0}},"width":720,"height":552,"resume":true,"useHandCursor":true,"id":"66tJRrWSoYd"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"ondoubleclick","textLib":[{"kind":"textdata","uniqueId":"6msu8HG4Y3a_-2081262999","id":"01","linkId":"txt__default_6msu8HG4Y3a","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":64,"bottom":28,"pngfb":false,"pr":{"l":"Lib","i":3}}}],"shapemaskId":"","xPos":640,"yPos":-2,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":39.5,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":81,"bottom":33,"altText":"EXIT","pngfb":false,"pr":{"l":"Lib","i":2}},"html5data":{"xPos":0,"yPos":0,"width":80,"height":32,"strokewidth":2}},"width":80,"height":32,"resume":true,"useHandCursor":true,"id":"6msu8HG4Y3a","events":[{"kind":"ondoubleclick","actions":[{"kind":"close_player"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5jEulXi8bYu_2064626105","id":"01","linkId":"txt__default_5jEulXi8bYu","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":605,"bottom":79,"pngfb":false,"pr":{"l":"Lib","i":857}}}],"shapemaskId":"","xPos":64,"yPos":62,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":303.5,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":609,"bottom":85,"altText":"Drag and Drop appropriate computer file classified by organization method.","pngfb":false,"pr":{"l":"Lib","i":486}},"html5data":{"xPos":0,"yPos":0,"width":608,"height":84,"strokewidth":1}},"width":608,"height":84,"resume":true,"useHandCursor":true,"id":"5jEulXi8bYu"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6HJtOBtya91_2033755826","id":"01","linkId":"txt__default_6HJtOBtya91","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":57,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":65}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":35.5,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":73,"bottom":33,"altText":"Home","pngfb":false,"pr":{"l":"Lib","i":64}},"html5data":{"xPos":0,"yPos":0,"width":72,"height":32,"strokewidth":1}},"width":72,"height":32,"resume":true,"useHandCursor":true,"id":"6HJtOBtya91","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6dSFott6Kgf.5iuoQ7X4Y8e"}}]}]},{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6NOPMierHnb_1476862416","id":"01","linkId":"txt__default_6WCzGAu2vIF","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":159,"bottom":43,"pngfb":false,"pr":{"l":"Lib","i":767}}}],"shapemaskId":"","xPos":512,"yPos":382,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":96,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":96,"snapy":26,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["6WCzGAu2vIF","_drop_5jOG2BfUvPG"],"dragoverids":["_group1","_drop_5jOG2BfUvPG"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":192,"bottom":53,"altText":"Sequential","pngfb":false,"pr":{"l":"Lib","i":766}},"html5data":{"xPos":0,"yPos":0,"width":192,"height":53,"strokewidth":0}},"animations":[{"kind":"animation","id":"6rk4v2IjX8F","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"512","y":"382","dx":"0","dy":"0"},"anchorb":{"x":"2666","y":"387.5","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":192,"height":53,"resume":true,"useHandCursor":true,"id":"6WCzGAu2vIF","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ondragconnect","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"6cbtMuYknef","typeb":"string"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.M2L3P","operator":"add","value":{"type":"number","value":1}}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"6cbtMuYknef","typeb":"string"}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.5q4m7n97hGT"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.5q4m7n97hGT"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6NGnUyXlavp_1896018732","id":"01","linkId":"txt__default_6FD9BiZmZ5Y","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":151,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":858}}}],"shapemaskId":"","xPos":40,"yPos":466,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":92,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":92,"snapy":25,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6hky7jAAsK4"],"dragoverids":["_drop_6hky7jAAsK4"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":184,"bottom":50,"altText":"Spreading","pngfb":false,"pr":{"l":"Lib","i":768}},"html5data":{"xPos":0,"yPos":0,"width":184,"height":50,"strokewidth":0}},"animations":[{"kind":"animation","id":"6m3TtAJkMiU","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"44","y":"465","dx":"0","dy":"0"},"anchorb":{"x":"-1948","y":"489","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":184,"height":50,"resume":true,"useHandCursor":true,"id":"6FD9BiZmZ5Y","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"onrelease","actions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.6Q87elFRSVS"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.6Q87elFRSVS"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6MjcjD9TOt1_-776641570","id":"01","linkId":"txt__default_6bzBlWGrlpJ","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":128,"bottom":43,"pngfb":false,"pr":{"l":"Lib","i":860}}}],"shapemaskId":"","xPos":296,"yPos":466,"tabIndex":12,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":92,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":92,"snapy":26,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["6bzBlWGrlpJ","_drop_6CxrJdmv9Kq"],"dragoverids":["_group1","_drop_6CxrJdmv9Kq"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":184,"bottom":53,"altText":"Direct","pngfb":false,"pr":{"l":"Lib","i":859}},"html5data":{"xPos":0,"yPos":0,"width":184,"height":53,"strokewidth":0}},"animations":[{"kind":"animation","id":"5p0FNNuSIDg","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"296","y":"466","dx":"0","dy":"0"},"anchorb":{"x":"2450","y":"471.5","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":184,"height":53,"resume":true,"useHandCursor":true,"id":"6bzBlWGrlpJ","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ondragconnect","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"6cbtMuYknef","typeb":"string"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.M2L3P","operator":"add","value":{"type":"number","value":1}}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"6cbtMuYknef","typeb":"string"}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.5q4m7n97hGT"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.5q4m7n97hGT"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6iX7ePN7MEZ_-1835338458","id":"01","linkId":"txt__default_6H7sRsRt2My","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":125,"bottom":43,"pngfb":false,"pr":{"l":"Lib","i":861}}}],"shapemaskId":"","xPos":40,"yPos":395,"tabIndex":9,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":92,"rotateYPos":26.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":92,"snapy":26,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["6H7sRsRt2My","_drop_5vy7ppxXFn1"],"dragoverids":["_group1","_drop_5vy7ppxXFn1"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":184,"bottom":53,"altText":"Serial","pngfb":false,"pr":{"l":"Lib","i":859}},"html5data":{"xPos":0,"yPos":0,"width":184,"height":53,"strokewidth":0}},"animations":[{"kind":"animation","id":"5X41eyIM4SA","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"40","y":"395","dx":"0","dy":"0"},"anchorb":{"x":"2194","y":"400.5","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":184,"height":53,"resume":true,"useHandCursor":true,"id":"6H7sRsRt2My","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"ondragconnect","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"6cbtMuYknef","typeb":"string"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.M2L3P","operator":"add","value":{"type":"number","value":1}}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"$DropTargetId","typea":"property","valueb":"6cbtMuYknef","typeb":"string"}]}},"thenActions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.5q4m7n97hGT"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.5q4m7n97hGT"}}]}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6hWVkltFZfW_1110694215","id":"01","linkId":"txt__default_5Y400khPMcS","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":149,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":862}}}],"shapemaskId":"","xPos":280,"yPos":390,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":96,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":96,"snapy":25,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6BWnn1nr4ze"],"dragoverids":["_drop_6BWnn1nr4ze"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":192,"bottom":50,"altText":"Populate","pngfb":false,"pr":{"l":"Lib","i":776}},"html5data":{"xPos":0,"yPos":0,"width":192,"height":50,"strokewidth":0}},"animations":[{"kind":"animation","id":"6Wix65JYlYO","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"284","y":"389","dx":"0","dy":"0"},"anchorb":{"x":"-1708","y":"413","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":192,"height":50,"resume":true,"useHandCursor":true,"id":"5Y400khPMcS","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"onrelease","actions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.6Q87elFRSVS"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.6Q87elFRSVS"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6Y8UZs0YMKQ_-62423873","id":"01","linkId":"txt__default_5x3LUWVtrSP","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":133,"bottom":42,"pngfb":false,"pr":{"l":"Lib","i":863}}}],"shapemaskId":"","xPos":496,"yPos":461,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":96,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"depth":11,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":true,"dropenabled":false,"dragoverenabled":false,"snapx":96,"snapy":25,"dragreturn":true,"multidrop":false,"droptype":"snap","dropoffsetx":20,"dropoffsety":20,"dragdropids":["_drop_6XfFGHuOlhD"],"dragoverids":["_drop_6XfFGHuOlhD"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":192,"bottom":50,"altText":"Points","pngfb":false,"pr":{"l":"Lib","i":776}},"html5data":{"xPos":0,"yPos":0,"width":192,"height":50,"strokewidth":0}},"animations":[{"kind":"animation","id":"6RHJqkVOnDs","duration":100,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":100,"position":{"relativerotation":false,"relativestartpoint":false,"path":[{"kind":"segment","type":"line","anchora":{"x":"500","y":"460","dx":"0","dy":"0"},"anchorb":{"x":"-1492","y":"484","dx":"0","dy":"0"}}],"duration":100,"easing":"linear","easingdir":"easein"}}]}],"width":192,"height":50,"resume":true,"useHandCursor":true,"id":"5x3LUWVtrSP","variables":[{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false},{"kind":"variable","name":"ItemWasDragged","type":"boolean","value":false,"resume":true}],"actionGroups":{"ActGrpClearStateVars":{"kind":"actiongroup","actions":[]}},"events":[{"kind":"onrelease","actions":[{"kind":"media_play","objRef":{"type":"string","value":"_parent.6Q87elFRSVS"}},{"kind":"set_volume","volume":100,"objRef":{"type":"string","value":"_parent.6Q87elFRSVS"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"ondragstart","actions":[{"kind":"adjustvar","variable":"ItemWasDragged","operator":"set","value":{"type":"boolean","value":true}}]}]}],"shuffle":true,"depth":6,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":608,"yPos":408,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":1077,"rotateYPos":3,"scaleX":100,"scaleY":100,"alpha":100,"depth":12,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":2154,"height":6,"resume":true,"useHandCursor":true,"id":"6rk4v2IjX8F"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-1856,"yPos":490,"tabIndex":17,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":996,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":13,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":1992,"height":24,"resume":true,"useHandCursor":true,"id":"6m3TtAJkMiU"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":388,"yPos":492,"tabIndex":18,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":1077,"rotateYPos":3,"scaleX":100,"scaleY":100,"alpha":100,"depth":14,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":2154,"height":6,"resume":true,"useHandCursor":true,"id":"5p0FNNuSIDg"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":132,"yPos":422,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":1077,"rotateYPos":3,"scaleX":100,"scaleY":100,"alpha":100,"depth":15,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":2154,"height":6,"resume":true,"useHandCursor":true,"id":"5X41eyIM4SA"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-1612,"yPos":414,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":996,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":16,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":1992,"height":24,"resume":true,"useHandCursor":true,"id":"6Wix65JYlYO"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-1396,"yPos":485,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":996,"rotateYPos":12,"scaleX":100,"scaleY":100,"alpha":100,"depth":17,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":83}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":1992,"height":24,"resume":true,"useHandCursor":true,"id":"6RHJqkVOnDs"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":72,"yPos":166,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":300,"rotateYPos":84,"scaleX":100,"scaleY":100,"alpha":100,"depth":18,"scrolling":true,"shuffleLock":false,"dragdrop":{"dragenabled":false,"dropenabled":true,"dragoverenabled":true,"snapx":300,"snapy":84,"dragreturn":true,"multidrop":true,"droptype":"stackrandom","dropoffsetx":20,"dropoffsety":20,"dragdropids":["6WCzGAu2vIF","6bzBlWGrlpJ","6H7sRsRt2My","_drop_6CxrJdmv9Kq","_drop_5vy7ppxXFn1","_drop_5jOG2BfUvPG"],"dragoverids":["_group1","_drop_6CxrJdmv9Kq","_drop_5vy7ppxXFn1","_drop_5jOG2BfUvPG"]},"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":601,"bottom":169,"altText":"Rectangle 16","pngfb":false,"pr":{"l":"Lib","i":778}},"html5data":{"xPos":0,"yPos":0,"width":600,"height":168,"strokewidth":2}},"width":600,"height":168,"resume":true,"useHandCursor":true,"id":"6cbtMuYknef"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');