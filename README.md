# \<sdl-dialog\>

Simple Dialog Window Element



## Download from npm using yarn into your node_modules directory
```
$ yarn upgrade
$ yarn add @sdl-web/sdl-dialog
```

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1, user-scalable=yes">

    <title>sdl-dialog demo</title>

    <!-- If using in an existing polymer project:  use sdl-dialog.js directly-->
    <script type="import" src="@sdl-web/sdl-dialog/src/components/sdl-dialog.js"></script> 

    <!-- Now add sdl-dialog to html section -->
    <sdl-dialog id='srch-bar1' opened="true">  

        <!-- Put whatever input fields (and styling) you want into this slot -->
      <form>
        <paper-input name="input1" label="Filter Search">
          <iron-icon icon="search" id="srch-icon" slot="prefix"></iron-icon>
        </paper-input>
      </form>
      
    </sdl-dialog>

  </body>
</html>

```
