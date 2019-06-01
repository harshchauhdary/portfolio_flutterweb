define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/particle_background/profile_page', 'packages/particle_background/simple_animations_package', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, material, animation, profile_page, simple_animations_package, ui, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__colors = material.src__material__colors;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__custom_paint = animation.src__rendering__custom_paint;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__widgets__binding = animation.src__widgets__binding;
  const profile_page$ = profile_page.profile_page;
  const simple_animations_package$ = simple_animations_package.simple_animations_package;
  const ui$ = ui.ui;
  const src__animation__tween = animation$.src__animation__tween;
  const src__animation__curves = animation$.src__animation__curves;
  const src__painting__gradient = animation$.src__painting__gradient;
  const src__painting__alignment = animation$.src__painting__alignment;
  const main = Object.create(dart.library);
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let JSArrayOfParticleModel = () => (JSArrayOfParticleModel = dart.constFn(_interceptors.JSArray$(main.ParticleModel)))();
  let ListOfNull = () => (ListOfNull = dart.constFn(core.List$(core.Null)))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let BuildContextAndDurationToCustomPaint = () => (BuildContextAndDurationToCustomPaint = dart.constFn(dart.fnType(src__widgets__basic.CustomPaint, [src__widgets__framework.BuildContext, core.Duration])))();
  let ParticleModelTodynamic = () => (ParticleModelTodynamic = dart.constFn(dart.fnType(dart.dynamic, [main.ParticleModel])))();
  let JSArrayOfTrack = () => (JSArrayOfTrack = dart.constFn(_interceptors.JSArray$(simple_animations_package$.Track)))();
  let ParticleModelToNull = () => (ParticleModelToNull = dart.constFn(dart.fnType(core.Null, [main.ParticleModel])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let ControlledAnimationOfMapOfString$dynamic = () => (ControlledAnimationOfMapOfString$dynamic = dart.constFn(simple_animations_package$.ControlledAnimation$(MapOfString$dynamic())))();
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui$.Color)))();
  let BuildContextAnddynamicToContainer = () => (BuildContextAnddynamicToContainer = dart.constFn(dart.fnType(src__widgets__container.Container, [src__widgets__framework.BuildContext, dart.dynamic])))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  main.ParticleApp = class ParticleApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, home: new src__material__scaffold.Scaffold.new({body: new main.ParticleBackgroundPage.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 15, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 13, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "body"})))], src__widgets__widget_inspector._Location))})))}), theme: src__material__theme_data.ThemeData.new({fontFamily: "GoogleSansRegular"}), $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 12, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "debugShowCheckedModeBanner"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "home"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "theme"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.ParticleApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.ParticleApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.ParticleApp.prototype;
  dart.addTypeTests(main.ParticleApp);
  dart.setMethodSignature(main.ParticleApp, () => ({
    __proto__: dart.getMethods(main.ParticleApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  main.ParticleBackgroundPage = class ParticleBackgroundPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([new src__widgets__basic.Positioned.fill({child: new main.AnimatedBackground.new({$creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 32, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$9 || (const$9 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 20, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.fill({child: new main.Particles.new(30, {$creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 32, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 42, name: "numberOfParticles"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 20, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.fill({child: new profile_page$.ProfilePage.new({$creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 32, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$20 || (const$20 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 20, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 12, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.ParticleBackgroundPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.ParticleBackgroundPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.ParticleBackgroundPage.prototype;
  dart.addTypeTests(main.ParticleBackgroundPage);
  dart.setMethodSignature(main.ParticleBackgroundPage, () => ({
    __proto__: dart.getMethods(main.ParticleBackgroundPage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  main.Particles = class Particles extends src__widgets__framework.StatefulWidget {
    get numberOfParticles() {
      return this[numberOfParticles$];
    }
    set numberOfParticles(value) {
      super.numberOfParticles = value;
    }
    createState() {
      return new main._ParticlesState.new();
    }
  };
  (main.Particles.new = function(numberOfParticles, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[numberOfParticles$] = numberOfParticles;
    main.Particles.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.Particles.prototype;
  dart.addTypeTests(main.Particles);
  const numberOfParticles$ = Symbol("Particles.numberOfParticles");
  dart.setMethodSignature(main.Particles, () => ({
    __proto__: dart.getMethods(main.Particles.__proto__),
    createState: dart.fnType(main._ParticlesState, [])
  }));
  dart.setFieldSignature(main.Particles, () => ({
    __proto__: dart.getFields(main.Particles.__proto__),
    numberOfParticles: dart.finalFieldType(core.int)
  }));
  const _simulateParticles = dart.privateName(main, "_simulateParticles");
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  main._ParticlesState = class _ParticlesState extends src__widgets__framework.State$(main.Particles) {
    initState() {
      ListOfNull().generate(this.widget.numberOfParticles, dart.fn(index => {
        this.particles[$add](new main.ParticleModel.new(this.random));
      }, intToNull()));
      super.initState();
    }
    build(context) {
      return new simple_animations_package$.Rendering.new({startTime: new core.Duration.new({seconds: 30}), onTick: dart.bind(this, _simulateParticles), builder: dart.fn((context, time) => new src__widgets__basic.CustomPaint.new({painter: new main.ParticlePainter.new(this.particles, time), $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 16, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 11, name: "painter"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAndDurationToCustomPaint()), $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 12, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 7, name: "startTime"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 7, name: "onTick"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 7, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
    }
    [_simulateParticles](time) {
      this.particles[$forEach](dart.fn(particle => particle.maintainRestart(time), ParticleModelTodynamic()));
    }
  };
  (main._ParticlesState.new = function() {
    this.random = math.Random.new();
    this.particles = JSArrayOfParticleModel().of([]);
    main._ParticlesState.__proto__.new.call(this);
    ;
  }).prototype = main._ParticlesState.prototype;
  dart.addTypeTests(main._ParticlesState);
  dart.setMethodSignature(main._ParticlesState, () => ({
    __proto__: dart.getMethods(main._ParticlesState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    [_simulateParticles]: dart.fnType(dart.dynamic, [core.Duration])
  }));
  dart.setFieldSignature(main._ParticlesState, () => ({
    __proto__: dart.getFields(main._ParticlesState.__proto__),
    random: dart.finalFieldType(math.Random),
    particles: dart.finalFieldType(core.List$(main.ParticleModel))
  }));
  main.ParticleModel = class ParticleModel extends core.Object {
    get tween() {
      return this[tween];
    }
    set tween(value) {
      this[tween] = value;
    }
    get size() {
      return this[size];
    }
    set size(value) {
      this[size] = value;
    }
    get animationProgress() {
      return this[animationProgress];
    }
    set animationProgress(value) {
      this[animationProgress] = value;
    }
    get random() {
      return this[random$];
    }
    set random(value) {
      this[random$] = value;
    }
    restart(opts) {
      let time = opts && 'time' in opts ? opts.time : core.Duration.zero;
      let startPosition = new ui$.Offset.new(-0.2 + 1.4 * dart.notNull(this.random.nextDouble()), 1.2);
      let endPosition = new ui$.Offset.new(-0.2 + 1.4 * dart.notNull(this.random.nextDouble()), -0.2);
      let duration = new core.Duration.new({milliseconds: 3000 + dart.notNull(this.random.nextInt(6000))});
      this.tween = new simple_animations_package$.MultiTrackTween.new(JSArrayOfTrack().of([new simple_animations_package$.Track.new("x").add(duration, new src__animation__tween.Tween.new({begin: startPosition.dx, end: endPosition.dx}), {curve: src__animation__curves.Curves.easeInOutSine}), new simple_animations_package$.Track.new("y").add(duration, new src__animation__tween.Tween.new({begin: startPosition.dy, end: endPosition.dy}), {curve: src__animation__curves.Curves.easeIn})]));
      this.animationProgress = new simple_animations_package$.AnimationProgress.new({duration: duration, startTime: time});
      this.size = 0.2 + dart.notNull(this.random.nextDouble()) * 0.4;
    }
    maintainRestart(time) {
      if (this.animationProgress.progress(time) === 1.0) {
        this.restart({time: time});
      }
    }
  };
  (main.ParticleModel.new = function(random) {
    this[tween] = null;
    this[size] = null;
    this[animationProgress] = null;
    this[random$] = random;
    this.restart();
  }).prototype = main.ParticleModel.prototype;
  dart.addTypeTests(main.ParticleModel);
  const tween = Symbol("ParticleModel.tween");
  const size = Symbol("ParticleModel.size");
  const animationProgress = Symbol("ParticleModel.animationProgress");
  const random$ = Symbol("ParticleModel.random");
  dart.setMethodSignature(main.ParticleModel, () => ({
    __proto__: dart.getMethods(main.ParticleModel.__proto__),
    restart: dart.fnType(dart.dynamic, [], {time: core.Duration}),
    maintainRestart: dart.fnType(dart.dynamic, [core.Duration])
  }));
  dart.setFieldSignature(main.ParticleModel, () => ({
    __proto__: dart.getFields(main.ParticleModel.__proto__),
    tween: dart.fieldType(src__animation__tween.Animatable),
    size: dart.fieldType(core.double),
    animationProgress: dart.fieldType(simple_animations_package$.AnimationProgress),
    random: dart.fieldType(math.Random)
  }));
  main.ParticlePainter = class ParticlePainter extends src__rendering__custom_paint.CustomPainter {
    get particles() {
      return this[particles$];
    }
    set particles(value) {
      this[particles$] = value;
    }
    get time() {
      return this[time$];
    }
    set time(value) {
      this[time$] = value;
    }
    paint(canvas, size) {
      let t0;
      let paint = (t0 = new ui$.Paint.new(), t0.color = src__material__colors.Colors.white.withAlpha(50), t0);
      this.particles[$forEach](dart.fn(particle => {
        let progress = particle.animationProgress.progress(this.time);
        let animation = particle.tween.transform(progress);
        let position = new ui$.Offset.new(core.double._check(dart.dsend(dart.dsend(animation, '_get', ["x"]), '*', [size.width])), core.double._check(dart.dsend(dart.dsend(animation, '_get', ["y"]), '*', [size.height])));
        canvas.drawCircle(position, dart.notNull(size.width) * 0.2 * dart.notNull(particle.size), paint);
      }, ParticleModelToNull()));
    }
    shouldRepaint(oldDelegate) {
      src__rendering__custom_paint.CustomPainter._check(oldDelegate);
      return true;
    }
  };
  (main.ParticlePainter.new = function(particles, time) {
    this[particles$] = particles;
    this[time$] = time;
    main.ParticlePainter.__proto__.new.call(this);
    ;
  }).prototype = main.ParticlePainter.prototype;
  dart.addTypeTests(main.ParticlePainter);
  const particles$ = Symbol("ParticlePainter.particles");
  const time$ = Symbol("ParticlePainter.time");
  dart.setMethodSignature(main.ParticlePainter, () => ({
    __proto__: dart.getMethods(main.ParticlePainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(main.ParticlePainter, () => ({
    __proto__: dart.getFields(main.ParticlePainter.__proto__),
    particles: dart.fieldType(core.List$(main.ParticleModel)),
    time: dart.fieldType(core.Duration)
  }));
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  main.AnimatedBackground = class AnimatedBackground extends src__widgets__framework.StatelessWidget {
    build(context) {
      let tween = new simple_animations_package$.MultiTrackTween.new(JSArrayOfTrack().of([new simple_animations_package$.Track.new("color1").add(new core.Duration.new({seconds: 3}), new src__animation__tween.ColorTween.new({begin: new ui$.Color.new(4287238458), end: src__material__colors.Colors.lightBlue.shade900})), new simple_animations_package$.Track.new("color2").add(new core.Duration.new({seconds: 3}), new src__animation__tween.ColorTween.new({begin: new ui$.Color.new(4282647062), end: src__material__colors.Colors.blue.shade600}))]));
      return new (ControlledAnimationOfMapOfString$dynamic()).new({playback: simple_animations_package$.Playback.MIRROR, tween: tween, duration: tween.duration, builder: dart.fn((context, animation) => new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({gradient: new src__painting__gradient.LinearGradient.new({begin: src__painting__alignment.Alignment.topLeft, end: src__painting__alignment.Alignment.bottomRight, colors: JSArrayOfColor().of([ui$.Color._check(dart.dsend(animation, '_get', ["color1"])), ui$.Color._check(dart.dsend(animation, '_get', ["color2"]))])})}), $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 149, column: 16, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 150, column: 11, name: "decoration"})))], src__widgets__widget_inspector._Location))})))}), BuildContextAnddynamicToContainer()), $creationLocationd_0dea112b090073317d4: const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 12, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$43 || (const$43 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 7, name: "playback"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 146, column: 7, name: "tween"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 7, name: "duration"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 7, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main.AnimatedBackground.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.AnimatedBackground.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.AnimatedBackground.prototype;
  dart.addTypeTests(main.AnimatedBackground);
  dart.setMethodSignature(main.AnimatedBackground, () => ({
    __proto__: dart.getMethods(main.AnimatedBackground.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$45;
  let const$46;
  main.main = function() {
    return src__widgets__binding.runApp(new main.ParticleApp.new({$creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 23, file: "org-dartlang-app:///packages/particle_background/main.dart", parameterLocations: const$45 || (const$45 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/particle_background/main", {
    "package:particle_background/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/particle_background/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,qEACuB,aACtB,gDACE,0yBAED,qDACO;IAGlB;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,8CACa,sBACL,gDAAY,2yBACZ,gDAAY,uBAAU,y5BACtB,gDAAY;IAG7B;;;;;;EACF;;;;;;;IAGY;;;;;;;AAKuB;IAAiB;;iCAHnC;;;AAAf;;EAAiC;;;;;;;;;;;;;;;;;;;;;;MAa1B,sBAAS,AAAO,+BAAmB,QAAC;QACvC,AAAU,qBAAI,2BAAc;;MAExB;IACR;UAG0B;AACxB,YAAO,0DACM,gCAAkB,wBACrB,oCACC,SAAC,SAAS,SACV,kDACI,6BAAgB,gBAAW,IAAI;IAIhD;yBAE4B;MAC1B,AAAU,yBAAQ,QAAC,YAAa,AAAS,QAAD,iBAAiB,IAAI;IAC/D;;;IA3Ba,cAAS;IAEI,iBAAY;;;EA0BxC;;;;;;;;;;;;;IAGa;;;;;;IACJ;;;;;;IACW;;;;;;IACX;;;;;;;UAMW,4CAAgB;AAC1B,0BAAgB,mBAAO,AAAK,CAAJ,MAAM,AAAI,mBAAE,AAAO,2BAAc;AACzD,wBAAc,mBAAO,AAAK,CAAJ,MAAM,AAAI,mBAAE,AAAO,2BAAc,CAAC;AACxD,qBAAW,qCAAuB,AAAK,oBAAE,AAAO,oBAAQ;MAE9D,aAAQ,mDAAgB,qBACtB,AAAW,yCAAL,SACF,QAAQ,EAAE,4CAAa,AAAc,aAAD,UAAU,AAAY,WAAD,eAC3C,+CAClB,AAAW,yCAAL,SACF,QAAQ,EAAE,4CAAa,AAAc,aAAD,UAAU,AAAY,WAAD,eAC3C;MAEpB,yBAAoB,gEAA4B,QAAQ,aAAa,IAAI;MACzE,YAAO,AAAI,MAAsB,aAApB,AAAO,4BAAe;IACrC;oBAEyB;AACvB,UAAI,AAAkB,AAAe,gCAAN,IAAI,MAAK;QACtC,oBAAc,IAAI;;IAEtB;;qCAzBmB;IALR;IACJ;IACW;IAGC;IACjB;EACF;;;;;;;;;;;;;;;;;;;IA2BoB;;;;;;IACX;;;;;;UAKS,QAAa;;AACvB,wBAAQ,qBAAS,WAAe,AAAM,6CAAU;MAEtD,AAAU,yBAAQ,QAAC;AACb,uBAAW,AAAS,AAAkB,QAAnB,4BAA4B;AAC7C,wBAAY,AAAS,AAAM,QAAP,iBAAiB,QAAQ;AAC7C,uBACF,sCAAsB,WAAN,WAAT,SAAS,WAAC,aAAO,AAAK,IAAD,8BAAuB,WAAN,WAAT,SAAS,WAAC,aAAO,AAAK,IAAD;QAC7D,AAAO,MAAD,YAAY,QAAQ,EAAa,AAAM,aAAjB,AAAK,IAAD,UAAS,mBAAM,AAAS,QAAD,QAAO,KAAK;;IAEvE;kBAGiC;;AAAgB;IAAI;;uCAhBhC,WAAgB;IAAhB;IAAgB;AAArC;;EAA0C;;;;;;;;;;;;;;;;;;;;;;;;UAqBhB;AAClB,kBAAQ,mDAAgB,qBAC5B,AAAgB,yCAAV,cAAc,gCAAkB,KAClC,iDAAkB,kBAAM,kBAAyB,AAAU,oDAC/D,AAAgB,yCAAV,cAAc,gCAAkB,KAClC,iDAAkB,kBAAM,kBAAyB,AAAK;AAG5D,YAAO,iEACc,mDACZ,KAAK,YACF,AAAM,KAAD,oBACN,SAAC,SAAS,cACV,uDACO,+DACE,uDACW,iDACF,wDACP,sCAAU,WAAT,SAAS,WAAC,8BAAoB,WAAT,SAAS,WAAC;IAIxD;;;;;;EACF;;;;;;;;;AAxJe,wCAAO;EAAc","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
