mp.keys.bind(0x2D,true, function(){
    mp.events.callRemote("anticheatkeybind")
    mp.gui.cursor.show(true,true)
    mp.browsers.new('package://AntiCheatKeybind/index.html');
});