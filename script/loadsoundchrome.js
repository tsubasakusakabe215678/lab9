/**
 * SoundManager 2 + Processing.js: Street Fighter demo
 */

soundManager.flashVersion = (window.location.toString().match(/#flash8/i)?8:9);
if (soundManager.flashVersion != 8) {
  soundManager.useHighPerformance = true;
}

soundManager.setup({
  url: 'swf/', // path to load SWF from (overriding default)
  bgColor: '#333333',
  wmode: 'transparent',
  debugMode: false,
  preferFlash: false,
  html5PollingInterval: 50,
  onready: function() {

    soundManager.setup({
      defaultOptions: {
        autoLoad: true,
        multiShot: true
      }
    });

    var soundURLs = 'IndianaJonesTheme,BabyCry,Pikachu,Whip'.split(',');
    for (var i=0; i<soundURLs.length; i++) {
      soundManager.createSound({
        id: 's'+i,
        url: 'audio/'+soundURLs[i]+'.mp3'
      });
    }

    /**
     * createSound options can also be set on a per-file basis, with specific option overrides.
     * (Options not specified here will inherit defaults as defined in soundManager.defaultOptions.)
     *
     * eg.
     *
     * soundManager.createSound({
     *  id: 'mySound',
     *  url: '/path/to/some.mp3',
     *  stream: true,
     *  autoPlay: true,
     *  multiShot: false,
     *  whileloading: function() { alert('sound '+this.id+': '+this.bytesLoaded+' of '+this.bytesTotal+' bytes loaded.'); } // event handler: "this" is scoped to SMSound() object instance for easy access to methods/properties
     * });
     *
     * - OR -
     *
     * If you just want a sound with all default options, you can also specify just the required id and URL as string parameters:
     *
     * soundManager.createSound('mySound','/path/to/some.mp3');
     */
  }
});

