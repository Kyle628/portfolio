$(function() {


  // if browse button is clicked, change displayed image to browse image
  document.getElementById("browsebutton").addEventListener('click',
    function() {
      WHICH_QUILT_VID = 0;
      $('#imgcontainer').html('<img src="./images/browse.png" height=400px width=500px style="color: white; border: solid; border-radius: 10px;">');
      $('#featuredescription').html('<h2>Browse</h2><p>Browse around the image quilt to see what other users have created. Scroll infinitely and find a place for your art.</p>');
    }
  );

  // if add button is clicked, change displayed video to add video
  document.getElementById("addbutton").addEventListener('click',
    function() {
      WHICH_QUILT_VID = 1;
      $('#imgcontainer').html('<img src="./images/add.png" height=400px width=500px style="color: white; border: solid; border-radius: 10px;">');
      $('#featuredescription').html('<h2>ADD</h2><p>Join the fun, by adding your own pictures to the quilt in any location you want. With infinite scrolling, there is always space.</p>');
    }
  );

  // if add button is clicked, change displayed video to oauth video
  document.getElementById("oauthbutton").addEventListener('click',
    function() {
      WHICH_QUILT_VID = 2;
      $('#imgcontainer').html('<img src="./images/oauth.png" height=400px width=500px style="color: white; border: solid; border-radius: 10px;">');
      $('#featuredescription').html('<h2>OAUTH</h2><p>Login fast and easy without having to create a new account with Facebook authentication.</p>');
    }
  );

  // ------------------------------------------- end of quilt


  document.getElementById("uploadbutton").addEventListener('click',
    function() {
      WHICH_GRAPHICS_VID = 0;
      $('#graphicscontainer').html('<img src="./images/upload.png" height=400px width=500px style="color: white; border: solid; border-radius: 10px;">');
      $('#graphicsfeatures').html('<h2>Upload</h2><p>Upload any 3d model in the polygon/vertex form, and see it rendered instantly.</p>');
    }
  );

  document.getElementById("manipulatebutton").addEventListener('click',
    function() {
      WHICH_GRAPHICS_VID = 1;
      $('#graphicscontainer').html('<img src="./images/manipulate.png" height=400px width=500px style="color: white; border: solid; border-radius: 10px;">');
      $('#graphicsfeatures').html('<h2>Manipulate</h2><p>After uploading your model, translate it, rotate it, and try out different forms of shading, lighting, and cameras.</p>');
    }
  );

// end of graphics
document.getElementById("createbutton").addEventListener('click',
  function() {
    $('#shredcontainer').html('<img src="./images/shredjournal.png" height=400px width=500px style="color: white; border: solid; border-radius: 10px;">');
    $('#shredjournalfeatures').html('<h2>Create A Journal</h2><p>Start By Creating a Journal, and adding your favorite surf spots and boards.</p>');
  }
);

document.getElementById("addentrybutton").addEventListener('click',
  function() {
    $('#shredcontainer').html('<img src="./images/addentry.png" height=400px width=500px style="color: white; border: solid; border-radius: 10px;">');
    $('#shredjournalfeatures').html('<h2>Add An Entry</h2><p>Journal your experiences and progressions as a surfer, in a journal that is tailored to surfers. Quickly take down conditions with presets, instead of having to type everything.</p>');
  }
);

document.getElementById("reviewbutton").addEventListener('click',
  function() {
    $('#shredcontainer').html('<img src="./images/reviewentry.png" height=400px width=500px style="color: white; border: solid; border-radius: 10px;">');
    $('#shredjournalfeatures').html('<h2>Look Back</h2><p>Never forget your favorite session, or use your journals as a tool to predict where the waves will be breaking when the swell hits. Catch more waves, and have more great sessions.</p>');
  }
);



});
