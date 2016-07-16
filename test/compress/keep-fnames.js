options_keep_fnames_true: {
    options = {
        keep_fnames: true,
    }
    input: {
        "use strict";
        function f1() {
          var f = function f2() {}
          return f;
        }
    }
    expect: {
        "use strict";
        function f1() {
          var f = function f2() {}
          return f;
        }
    }
}

options_keep_fnames_false: {
    options = {
        unused: true,
        keep_fnames: false,
    }
    input: {
        "use strict";
        function f1() {
          var f = function f2() {}
          return f;
        }
    }
    expect: {
        "use strict";
        function f1() {
          var f = function() {}
          return f;
        }
    }
}

mangle_keep_fnames_true: {
    options = {
        unused: true,
        keep_fnames: false,
    }
    mangle = {
        keep_fnames: true,
    }
    input: {
        "use strict";
        function f1() {
          var f = function f2() {}
          return f;
        }
    }
    expect: {
        "use strict";
        function f1() {
          var n = function() {}
          return n;
        }
    }
}

mangle_keep_fnames_false: {
    options = {
        unused: true,
        keep_fnames: true,
    }
    mangle = {
        keep_fnames : false,
    }
    input: {
        "use strict";
        function f1() {
          var f = function f2() {}
          return f;
        }
    }
    expect: {
        "use strict";
        function f1() {
          var n = function n() {}
          return n;
        }
    }
}
