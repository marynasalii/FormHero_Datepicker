# FormHero: Front-end Developer Skills Lab

To demonstrate your knowledge of JavaScript and AngularJS (or your ability to quickly learn how to write AngularJS Directives / Components) we have put together this mini application.

We would like you to create a directive/component that is a custom Date Input.

This directive/component should be called <b>fh-date-input</b>, should allow <b>fh-data-input</b> to be used as an attribute to instantiate the directive and should meet the following requirements:</p>

- It should consist of at least three files: fh-date-input.js, fh-date-input.scss and fh-date-input.tpl.html
- It should require ng-model to connect the directive to a value
- The value passed to ng-model must be able to be null, undefined, a String (in the format produced by Date.toJSON()) or a Date object
- You should be able to configure a maximum date by adding an fh-max-date attribute
- You should be able to configure a minimum date by adding an fh-min-date attribute
- It should be properly two-way bound. That is, if the value passed to ng-model changes, your date input widget should update with the new value.
- It should support being 'required'. That is, if fh-required="true" is an attribute on the element, the widget should behave like a proper form input, and set the correct error state on ng-model
- It should support updating the ng-model to reflect $dirty, $pristine, $valid, etc, states.
- You should be able to use any of the above options in combination (ie. set both a min and a max date)
- You should be able to configure the 'precision' of the date picker through an 'fh-precision' attribute. By default, this will be 'day' and the user will be prompted to pick month, day and year. But if it is set to 'month' they should only be prompted for month and year, and if set to 'year', they should only be prompted for the year.

The next tab, "Your Solution", is already set up to use the new directive, and contains a variety of uses of the directive that should demonstrate it's functionality.</p>

Please clone the repository, run 'npm install', and then 'gulp watch' to launch the application. Open your browser to http://localhost:8880 and there are further details available.