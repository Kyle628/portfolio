$(function() {

  //get all the quilt videos into js vars

  browse_vid = document.createElement('video');
  browse_vid.setAttribute('src', './images/quiltbrowse.mp4');
  browse_vid.setAttribute('width', '100%');
  browse_vid.setAttribute('height', '500');
  browse_vid.setAttribute('controls', 'true');

  add_vid = document.createElement('video');
  add_vid.setAttribute('src', './images/quiltadd.mp4');
  add_vid.setAttribute('width', '100%');
  add_vid.setAttribute('height', '500');
  add_vid.setAttribute('controls', 'true');

  oauth_vid = document.createElement('video');
  oauth_vid.setAttribute('src', './images/quiltoauth.mp4');
  oauth_vid.setAttribute('width', '100%');
  oauth_vid.setAttribute('height', '500');
  oauth_vid.setAttribute('controls', 'true');

  // keep videos in an array
  var videos = [browse_vid, add_vid, oauth_vid];

  // gonna want to keep track of which video to display
  var WHICH_QUILT_VID = 0;

  // initially change the inner html to the browse video
  //$('#imgcontainer').html('<img src="../images/browse.png"');

  // if browse button is clicked, change displayed video to browse video
  document.getElementById("browsebutton").addEventListener('click',
    function() {
      WHICH_QUILT_VID = 0;
      $('#imgcontainer').html('<img src="./images/browse.png" height=400px width=500px>');
      $('#featuredescription').html('<h2>Browse</h2><p>Browse around the image quilt to see what other users have created. Scroll infinitely and find a place for your art.</p>');
    }
  );

  // if add button is clicked, change displayed video to add video
  document.getElementById("addbutton").addEventListener('click',
    function() {
      WHICH_QUILT_VID = 1;
      $('#imgcontainer').html('<img src="./images/add.png" height=400px width=500px>');
      $('#featuredescription').html('<h2>ADD</h2><p>Join the fun, by adding your own pictures to the quilt in any location you want. With infinite scrolling, there is always space.</p>');
    }
  );

  // if add button is clicked, change displayed video to oauth video
  document.getElementById("oauthbutton").addEventListener('click',
    function() {
      WHICH_QUILT_VID = 2;
      $('#imgcontainer').html('<img src="./images/oauth.png" height=400px width=500px>');
      $('#featuredescription').html('<h2>OAUTH</h2><p>Login fast and easy without having to create a new account with Facebook authentication.</p>');
    }
  );

  // ------------------------------------------- end of quilt video stuff

  //get all the quilt videos into js vars

  upload_vid = document.createElement('video');
  upload_vid.setAttribute('src', './images/graphicsupload.mp4');
  upload_vid.setAttribute('width', '100%');
  upload_vid.setAttribute('height', '500');
  upload_vid.setAttribute('controls', 'true');

  manipulate_vid = document.createElement('video');
  manipulate_vid.setAttribute('src', './images/graphicsmanipulation.mp4');
  manipulate_vid.setAttribute('width', '100%');
  manipulate_vid.setAttribute('height', '500');
  manipulate_vid.setAttribute('controls', 'true');

  // keep videos in an array
  var graphics_videos = [upload_vid, manipulate_vid];

  var WHICH_GRAPHICS_VID = 0;

  // initially change the inner html to the browse video
  //$('#graphicscontainer').html(graphics_videos[WHICH_GRAPHICS_VID]);

  document.getElementById("uploadbutton").addEventListener('click',
    function() {
      WHICH_GRAPHICS_VID = 0;
      $('#graphicsfeatures').html('<h2>Upload</h2><p>Upload any 3d model in the polygon/vertex form, and see it rendered instantly.</p>');
    }
  );

  document.getElementById("manipulatebutton").addEventListener('click',
    function() {
      WHICH_GRAPHICS_VID = 1;
      $('#graphicsfeatures').html('<h2>Manipulate</h2><p>After uploading your model, translate it, rotate it, and try out different forms of shading, lighting, and cameras.</p>');
    }
  );


});
