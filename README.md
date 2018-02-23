# skpm-require-crash

Created for testing https://github.com/airbnb/react-sketchapp/issues/216

This demonstrates that skpm-build --run will crash Sketch when there is a
`require()` for a resource (webpacked or not).

Tested with Sketch v48.2.

To isolate the issue from webpack, the following command can be run after
`npm run build` - this uses the same command line that webpack does after
the build is complete to run the plugin.

NB: Modify the paths to suit your system

```
"/{Applications}/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool" run "/Users/{username}/{path/to/this/repo/}/plugin.sketchplugin" "my-command-identifier" --without-activating
```

The trigger for the crash is the use of `context.plug.urlForResourceNamed()`
which is injected by the webpack resource loader (part of skpm-build).  Other
than logging, nothing can be done with the return value without triggering the
crash.  It looks like the return value is deallocated memory, or become
deallocated very soon after the return.

The plugin can be successfully run, once built and linked to Sketch, by using
the Sketch > Plugins > sketch-require-crash > my-command menu.
