define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/scheduler', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/src/foundation/assertions'], function(dart_sdk, animation, scheduler, animation$, assertions) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__scheduler__ticker = scheduler.src__scheduler__ticker;
  const src__animation__tween_sequence = animation$.src__animation__tween_sequence;
  const src__animation__tween = animation$.src__animation__tween;
  const src__animation__curves = animation$.src__animation__curves;
  const src__animation__animation = animation$.src__animation__animation;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const simple_animations_package = Object.create(dart.library);
  const $round = dartx.round;
  const $forEach = dartx.forEach;
  const $length = dartx.length;
  const $where = dartx.where;
  const $map = dartx.map;
  const $reduce = dartx.reduce;
  const $toList = dartx.toList;
  const $add = dartx.add;
  const $_set = dartx._set;
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let LinkedMapOfString$_TweenData = () => (LinkedMapOfString$_TweenData = dart.constFn(_js_helper.LinkedMap$(core.String, simple_animations_package._TweenData)))();
  let TrackTobool = () => (TrackTobool = dart.constFn(dart.fnType(core.bool, [simple_animations_package.Track])))();
  let _TrackItemToint = () => (_TrackItemToint = dart.constFn(dart.fnType(core.int, [simple_animations_package._TrackItem])))();
  let intAndintToint = () => (intAndintToint = dart.constFn(dart.fnType(core.int, [core.int, core.int])))();
  let TrackToNull = () => (TrackToNull = dart.constFn(dart.fnType(core.Null, [simple_animations_package.Track])))();
  let _TrackItemToTweenSequenceItem = () => (_TrackItemToTweenSequenceItem = dart.constFn(dart.fnType(src__animation__tween_sequence.TweenSequenceItem, [simple_animations_package._TrackItem])))();
  let LinkedMapOfString$dynamic = () => (LinkedMapOfString$dynamic = dart.constFn(_js_helper.LinkedMap$(core.String, dart.dynamic)))();
  let StringAnd_TweenDataToNull = () => (StringAnd_TweenDataToNull = dart.constFn(dart.fnType(core.Null, [core.String, simple_animations_package._TweenData])))();
  let JSArrayOf_TrackItem = () => (JSArrayOf_TrackItem = dart.constFn(_interceptors.JSArray$(simple_animations_package._TrackItem)))();
  let BuildContextAnddynamicToWidget = () => (BuildContextAnddynamicToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, dart.dynamic])))();
  let BuildContextAndWidgetAnddynamicToWidget = () => (BuildContextAndWidgetAnddynamicToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__widgets__framework.Widget, dart.dynamic])))();
  simple_animations_package.Rendering = class Rendering extends src__widgets__framework.StatefulWidget {
    get builder() {
      return this[builder$];
    }
    set builder(value) {
      super.builder = value;
    }
    get onTick() {
      return this[onTick$];
    }
    set onTick(value) {
      super.onTick = value;
    }
    get startTime() {
      return this[startTime$];
    }
    set startTime(value) {
      super.startTime = value;
    }
    get startTimeSimulationTicks() {
      return this[startTimeSimulationTicks$];
    }
    set startTimeSimulationTicks(value) {
      super.startTimeSimulationTicks = value;
    }
    createState() {
      return new simple_animations_package._RenderingState.new();
    }
  };
  (simple_animations_package.Rendering.new = function(opts) {
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let onTick = opts && 'onTick' in opts ? opts.onTick : null;
    let startTime = opts && 'startTime' in opts ? opts.startTime : core.Duration.zero;
    let startTimeSimulationTicks = opts && 'startTimeSimulationTicks' in opts ? opts.startTimeSimulationTicks : 20;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[builder$] = builder;
    this[onTick$] = onTick;
    this[startTime$] = startTime;
    this[startTimeSimulationTicks$] = startTimeSimulationTicks;
    if (!(builder != null)) dart.assertFailed("Builder needs to defined.");
    simple_animations_package.Rendering.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = simple_animations_package.Rendering.prototype;
  dart.addTypeTests(simple_animations_package.Rendering);
  const builder$ = Symbol("Rendering.builder");
  const onTick$ = Symbol("Rendering.onTick");
  const startTime$ = Symbol("Rendering.startTime");
  const startTimeSimulationTicks$ = Symbol("Rendering.startTimeSimulationTicks");
  dart.setMethodSignature(simple_animations_package.Rendering, () => ({
    __proto__: dart.getMethods(simple_animations_package.Rendering.__proto__),
    createState: dart.fnType(simple_animations_package._RenderingState, [])
  }));
  dart.setFieldSignature(simple_animations_package.Rendering, () => ({
    __proto__: dart.getFields(simple_animations_package.Rendering.__proto__),
    builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.Duration])),
    onTick: dart.finalFieldType(dart.fnType(dart.dynamic, [core.Duration])),
    startTime: dart.finalFieldType(core.Duration),
    startTimeSimulationTicks: dart.finalFieldType(core.int)
  }));
  const _ticker = dart.privateName(simple_animations_package, "_ticker");
  const _timeElapsed = dart.privateName(simple_animations_package, "_timeElapsed");
  const _simulateStartTimeTicks = dart.privateName(simple_animations_package, "_simulateStartTimeTicks");
  const _onRender = dart.privateName(simple_animations_package, "_onRender");
  const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(simple_animations_package.Rendering) {};
  (State_SingleTickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(simple_animations_package.Rendering)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(simple_animations_package.Rendering));
  simple_animations_package._RenderingState = class _RenderingState extends State_SingleTickerProviderStateMixin$ {
    initState() {
      if (dart.test(this.widget.startTime['>'](core.Duration.zero))) {
        this[_simulateStartTimeTicks]();
      }
      this[_ticker] = this.createTicker(dart.fn(elapsed => {
        this[_onRender](elapsed['+'](this.widget.startTime));
      }, DurationToNull()));
      this[_ticker].start();
      super.initState();
    }
    [_onRender](effectiveElapsed) {
      if (this.widget.onTick != null) {
        this.widget.onTick(effectiveElapsed);
      }
      this.setState(dart.fn(() => {
        this[_timeElapsed] = effectiveElapsed;
      }, VoidToNull()));
    }
    [_simulateStartTimeTicks]() {
      if (this.widget.onTick != null) {
        core.Iterable.generate(dart.notNull(this.widget.startTimeSimulationTicks) + 1)[$forEach](dart.fn(i => {
          let simulatedTime = new core.Duration.new({milliseconds: (dart.notNull(this.widget.startTime.inMilliseconds) * dart.notNull(core.num._check(i)) / dart.notNull(this.widget.startTimeSimulationTicks))[$round]()});
          this.widget.onTick(simulatedTime);
        }, dynamicToNull()));
      }
    }
    dispose() {
      this[_ticker].stop({canceled: true});
      super.dispose();
    }
    build(context) {
      return this.widget.builder(context, this[_timeElapsed]);
    }
  };
  (simple_animations_package._RenderingState.new = function() {
    this[_ticker] = null;
    this[_timeElapsed] = new core.Duration.new({milliseconds: 0});
    simple_animations_package._RenderingState.__proto__.new.call(this);
    ;
  }).prototype = simple_animations_package._RenderingState.prototype;
  dart.addTypeTests(simple_animations_package._RenderingState);
  dart.setMethodSignature(simple_animations_package._RenderingState, () => ({
    __proto__: dart.getMethods(simple_animations_package._RenderingState.__proto__),
    [_onRender]: dart.fnType(dart.void, [core.Duration]),
    [_simulateStartTimeTicks]: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(simple_animations_package._RenderingState, () => ({
    __proto__: dart.getFields(simple_animations_package._RenderingState.__proto__),
    [_ticker]: dart.fieldType(src__scheduler__ticker.Ticker),
    [_timeElapsed]: dart.fieldType(core.Duration)
  }));
  const _tracksToTween = dart.privateName(simple_animations_package, "_tracksToTween");
  const _maxDuration = dart.privateName(simple_animations_package, "_maxDuration");
  const _computeMaxDuration = dart.privateName(simple_animations_package, "_computeMaxDuration");
  const _computeTrackTweens = dart.privateName(simple_animations_package, "_computeTrackTweens");
  simple_animations_package.MultiTrackTween = class MultiTrackTween extends src__animation__tween.Animatable$(core.Map$(core.String, dart.dynamic)) {
    [_computeMaxDuration](tracks) {
      tracks[$forEach](dart.fn(track => {
        let trackDuration = track.items[$map](core.int, dart.fn(item => item.duration.inMilliseconds, _TrackItemToint()))[$reduce](dart.fn((sum, item) => dart.notNull(sum) + dart.notNull(item), intAndintToint()));
        this[_maxDuration] = math.max(core.int, this[_maxDuration], trackDuration);
      }, TrackToNull()));
    }
    [_computeTrackTweens](tracks) {
      tracks[$forEach](dart.fn(track => {
        let trackDuration = track.items[$map](core.int, dart.fn(item => item.duration.inMilliseconds, _TrackItemToint()))[$reduce](dart.fn((sum, item) => dart.notNull(sum) + dart.notNull(item), intAndintToint()));
        let sequenceItems = track.items[$map](src__animation__tween_sequence.TweenSequenceItem, dart.fn(item => new src__animation__tween_sequence.TweenSequenceItem.new({tween: item.tween, weight: dart.notNull(item.duration.inMilliseconds) / dart.notNull(this[_maxDuration])}), _TrackItemToTweenSequenceItem()))[$toList]();
        if (dart.notNull(trackDuration) < dart.notNull(this[_maxDuration])) {
          sequenceItems[$add](new src__animation__tween_sequence.TweenSequenceItem.new({tween: new src__animation__tween.ConstantTween.new(null), weight: (dart.notNull(this[_maxDuration]) - dart.notNull(trackDuration)) / dart.notNull(this[_maxDuration])}));
        }
        let sequence = new src__animation__tween_sequence.TweenSequence.new(sequenceItems);
        this[_tracksToTween][$_set](track.name, new simple_animations_package._TweenData.new({tween: sequence, maxTime: dart.notNull(trackDuration) / dart.notNull(this[_maxDuration])}));
      }, TrackToNull()));
    }
    get duration() {
      return new core.Duration.new({milliseconds: this[_maxDuration]});
    }
    transform(t) {
      let result = new (LinkedMapOfString$dynamic()).new();
      this[_tracksToTween][$forEach](dart.fn((name, tweenData) => {
        let tTween = math.max(core.double, 0.0, math.min(core.double, t, dart.notNull(tweenData.maxTime) - 0.0001));
        result[$_set](name, tweenData.tween.transform(tTween));
      }, StringAnd_TweenDataToNull()));
      return result;
    }
  };
  (simple_animations_package.MultiTrackTween.new = function(tracks) {
    this[_tracksToTween] = new (LinkedMapOfString$_TweenData()).new();
    this[_maxDuration] = 0;
    if (!(tracks != null && dart.notNull(tracks[$length]) > 0)) dart.assertFailed("Add a List<Track> to configure the tween.");
    if (!(tracks[$where](dart.fn(track => track.items[$length] === 0, TrackTobool()))[$length] === 0)) dart.assertFailed("Each Track needs at least one added Tween by using the add()-method.");
    simple_animations_package.MultiTrackTween.__proto__.new.call(this);
    this[_computeMaxDuration](tracks);
    this[_computeTrackTweens](tracks);
  }).prototype = simple_animations_package.MultiTrackTween.prototype;
  dart.addTypeTests(simple_animations_package.MultiTrackTween);
  dart.setMethodSignature(simple_animations_package.MultiTrackTween, () => ({
    __proto__: dart.getMethods(simple_animations_package.MultiTrackTween.__proto__),
    [_computeMaxDuration]: dart.fnType(dart.void, [core.List$(simple_animations_package.Track)]),
    [_computeTrackTweens]: dart.fnType(dart.void, [core.List$(simple_animations_package.Track)]),
    transform: dart.fnType(core.Map$(core.String, dart.dynamic), [core.double])
  }));
  dart.setGetterSignature(simple_animations_package.MultiTrackTween, () => ({
    __proto__: dart.getGetters(simple_animations_package.MultiTrackTween.__proto__),
    duration: core.Duration
  }));
  dart.setFieldSignature(simple_animations_package.MultiTrackTween, () => ({
    __proto__: dart.getFields(simple_animations_package.MultiTrackTween.__proto__),
    [_tracksToTween]: dart.finalFieldType(core.Map$(core.String, simple_animations_package._TweenData)),
    [_maxDuration]: dart.fieldType(core.int)
  }));
  const _is_Track_default = Symbol('_is_Track_default');
  simple_animations_package.Track$ = dart.generic(T => {
    let AnimatableOfT = () => (AnimatableOfT = dart.constFn(src__animation__tween.Animatable$(T)))();
    class Track extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get items() {
        return this[items];
      }
      set items(value) {
        super.items = value;
      }
      add(duration, tween, opts) {
        AnimatableOfT()._check(tween);
        let curve = opts && 'curve' in opts ? opts.curve : null;
        this.items[$add](new simple_animations_package._TrackItem.new(duration, tween, {curve: curve}));
        return this;
      }
    }
    (Track.new = function(name) {
      this[items] = JSArrayOf_TrackItem().of([]);
      this[name$] = name;
      if (!(name != null)) dart.assertFailed("Track name must not be null.");
      ;
    }).prototype = Track.prototype;
    dart.addTypeTests(Track);
    Track.prototype[_is_Track_default] = true;
    const name$ = Symbol("Track.name");
    const items = Symbol("Track.items");
    dart.setMethodSignature(Track, () => ({
      __proto__: dart.getMethods(Track.__proto__),
      add: dart.fnType(simple_animations_package.Track$(T), [core.Duration, core.Object], {curve: src__animation__curves.Curve})
    }));
    dart.setFieldSignature(Track, () => ({
      __proto__: dart.getFields(Track.__proto__),
      name: dart.finalFieldType(core.String),
      items: dart.finalFieldType(core.List$(simple_animations_package._TrackItem))
    }));
    return Track;
  });
  simple_animations_package.Track = simple_animations_package.Track$();
  dart.addTypeTests(simple_animations_package.Track, _is_Track_default);
  const _is__TrackItem_default = Symbol('_is__TrackItem_default');
  simple_animations_package._TrackItem$ = dart.generic(T => {
    let AnimatableOfT = () => (AnimatableOfT = dart.constFn(src__animation__tween.Animatable$(T)))();
    class _TrackItem extends core.Object {
      get tween() {
        return this[tween];
      }
      set tween(value) {
        this[tween] = AnimatableOfT()._check(value);
      }
    }
    (_TrackItem.new = function(duration, _tween, opts) {
      let curve = opts && 'curve' in opts ? opts.curve : null;
      this[tween] = null;
      this.duration = duration;
      if (!(duration != null)) dart.assertFailed("Please set a duration.");
      if (!(_tween != null)) dart.assertFailed("Please set a tween.");
      if (curve != null) {
        this.tween = _tween.chain(new src__animation__tween.CurveTween.new({curve: curve}));
      } else {
        this.tween = _tween;
      }
    }).prototype = _TrackItem.prototype;
    dart.addTypeTests(_TrackItem);
    _TrackItem.prototype[_is__TrackItem_default] = true;
    const tween = Symbol("_TrackItem.tween");
    dart.setFieldSignature(_TrackItem, () => ({
      __proto__: dart.getFields(_TrackItem.__proto__),
      duration: dart.finalFieldType(core.Duration),
      tween: dart.fieldType(src__animation__tween.Animatable$(T))
    }));
    return _TrackItem;
  });
  simple_animations_package._TrackItem = simple_animations_package._TrackItem$();
  dart.addTypeTests(simple_animations_package._TrackItem, _is__TrackItem_default);
  const _is__TweenData_default = Symbol('_is__TweenData_default');
  simple_animations_package._TweenData$ = dart.generic(T => {
    class _TweenData extends core.Object {}
    (_TweenData.new = function(opts) {
      let tween = opts && 'tween' in opts ? opts.tween : null;
      let maxTime = opts && 'maxTime' in opts ? opts.maxTime : null;
      this.tween = tween;
      this.maxTime = maxTime;
      ;
    }).prototype = _TweenData.prototype;
    dart.addTypeTests(_TweenData);
    _TweenData.prototype[_is__TweenData_default] = true;
    dart.setFieldSignature(_TweenData, () => ({
      __proto__: dart.getFields(_TweenData.__proto__),
      tween: dart.finalFieldType(src__animation__tween.Animatable$(T)),
      maxTime: dart.finalFieldType(core.double)
    }));
    return _TweenData;
  });
  simple_animations_package._TweenData = simple_animations_package._TweenData$();
  dart.addTypeTests(simple_animations_package._TweenData, _is__TweenData_default);
  const _name$ = dart.privateName(simple_animations_package, "_name");
  simple_animations_package.Playback = class Playback extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (simple_animations_package.Playback.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = simple_animations_package.Playback.prototype;
  dart.addTypeTests(simple_animations_package.Playback);
  dart.setFieldSignature(simple_animations_package.Playback, () => ({
    __proto__: dart.getFields(simple_animations_package.Playback.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(simple_animations_package.Playback, ['toString']);
  simple_animations_package.Playback.PAUSE = dart.const(new simple_animations_package.Playback.new(0, "Playback.PAUSE"));
  simple_animations_package.Playback.PLAY_FORWARD = dart.const(new simple_animations_package.Playback.new(1, "Playback.PLAY_FORWARD"));
  simple_animations_package.Playback.PLAY_REVERSE = dart.const(new simple_animations_package.Playback.new(2, "Playback.PLAY_REVERSE"));
  simple_animations_package.Playback.START_OVER_FORWARD = dart.const(new simple_animations_package.Playback.new(3, "Playback.START_OVER_FORWARD"));
  simple_animations_package.Playback.START_OVER_REVERSE = dart.const(new simple_animations_package.Playback.new(4, "Playback.START_OVER_REVERSE"));
  simple_animations_package.Playback.LOOP = dart.const(new simple_animations_package.Playback.new(5, "Playback.LOOP"));
  simple_animations_package.Playback.MIRROR = dart.const(new simple_animations_package.Playback.new(6, "Playback.MIRROR"));
  simple_animations_package.Playback.values = dart.constList([simple_animations_package.Playback.PAUSE, simple_animations_package.Playback.PLAY_FORWARD, simple_animations_package.Playback.PLAY_REVERSE, simple_animations_package.Playback.START_OVER_FORWARD, simple_animations_package.Playback.START_OVER_REVERSE, simple_animations_package.Playback.LOOP, simple_animations_package.Playback.MIRROR], simple_animations_package.Playback);
  const _is_ControlledAnimation_default = Symbol('_is_ControlledAnimation_default');
  simple_animations_package.ControlledAnimation$ = dart.generic(T => {
    let _ControlledAnimationStateOfT = () => (_ControlledAnimationStateOfT = dart.constFn(simple_animations_package._ControlledAnimationState$(T)))();
    class ControlledAnimation extends src__widgets__framework.StatefulWidget {
      get playback() {
        return this[playback$];
      }
      set playback(value) {
        super.playback = value;
      }
      get tween() {
        return this[tween$];
      }
      set tween(value) {
        super.tween = value;
      }
      get curve() {
        return this[curve$];
      }
      set curve(value) {
        super.curve = value;
      }
      get duration() {
        return this[duration$];
      }
      set duration(value) {
        super.duration = value;
      }
      get delay() {
        return this[delay$];
      }
      set delay(value) {
        super.delay = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get builderWithChild() {
        return this[builderWithChild$];
      }
      set builderWithChild(value) {
        super.builderWithChild = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get animationControllerStatusListener() {
        return this[animationControllerStatusListener$];
      }
      set animationControllerStatusListener(value) {
        super.animationControllerStatusListener = value;
      }
      get startPosition() {
        return this[startPosition$];
      }
      set startPosition(value) {
        super.startPosition = value;
      }
      createState() {
        return new (_ControlledAnimationStateOfT()).new();
      }
    }
    (ControlledAnimation.new = function(opts) {
      let playback = opts && 'playback' in opts ? opts.playback : simple_animations_package.Playback.PLAY_FORWARD;
      let tween = opts && 'tween' in opts ? opts.tween : null;
      let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.linear;
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let delay = opts && 'delay' in opts ? opts.delay : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let builderWithChild = opts && 'builderWithChild' in opts ? opts.builderWithChild : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let animationControllerStatusListener = opts && 'animationControllerStatusListener' in opts ? opts.animationControllerStatusListener : null;
      let startPosition = opts && 'startPosition' in opts ? opts.startPosition : 0.0;
      let key = opts && 'key' in opts ? opts.key : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[playback$] = playback;
      this[tween$] = tween;
      this[curve$] = curve;
      this[duration$] = duration;
      this[delay$] = delay;
      this[builder$] = builder;
      this[builderWithChild$] = builderWithChild;
      this[child$] = child;
      this[animationControllerStatusListener$] = animationControllerStatusListener;
      this[startPosition$] = startPosition;
      if (!(duration != null)) dart.assertFailed("Please set property duration. Example: Duration(milliseconds: 500)");
      if (!(tween != null)) dart.assertFailed("Please set property tween. Example: Tween(from: 0.0, to: 100.0)");
      if (!(builderWithChild != null && child != null && builder == null || builder != null && builderWithChild == null && child == null)) dart.assertFailed("Either use just builder and keep buildWithChild and child null. " + "Or keep builder null and set a builderWithChild and a child.");
      if (!(dart.notNull(startPosition) >= 0 && dart.notNull(startPosition) <= 1)) dart.assertFailed("The property startPosition " + "must have a value between 0.0 and 1.0.");
      ControlledAnimation.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ControlledAnimation.prototype;
    dart.addTypeTests(ControlledAnimation);
    ControlledAnimation.prototype[_is_ControlledAnimation_default] = true;
    const playback$ = Symbol("ControlledAnimation.playback");
    const tween$ = Symbol("ControlledAnimation.tween");
    const curve$ = Symbol("ControlledAnimation.curve");
    const duration$ = Symbol("ControlledAnimation.duration");
    const delay$ = Symbol("ControlledAnimation.delay");
    const builder$ = Symbol("ControlledAnimation.builder");
    const builderWithChild$ = Symbol("ControlledAnimation.builderWithChild");
    const child$ = Symbol("ControlledAnimation.child");
    const animationControllerStatusListener$ = Symbol("ControlledAnimation.animationControllerStatusListener");
    const startPosition$ = Symbol("ControlledAnimation.startPosition");
    dart.setMethodSignature(ControlledAnimation, () => ({
      __proto__: dart.getMethods(ControlledAnimation.__proto__),
      createState: dart.fnType(simple_animations_package._ControlledAnimationState$(T), [])
    }));
    dart.setFieldSignature(ControlledAnimation, () => ({
      __proto__: dart.getFields(ControlledAnimation.__proto__),
      playback: dart.finalFieldType(simple_animations_package.Playback),
      tween: dart.finalFieldType(src__animation__tween.Animatable$(T)),
      curve: dart.finalFieldType(src__animation__curves.Curve),
      duration: dart.finalFieldType(core.Duration),
      delay: dart.finalFieldType(core.Duration),
      builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, T])),
      builderWithChild: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__widgets__framework.Widget, T])),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      animationControllerStatusListener: dart.finalFieldType(dart.fnType(dart.void, [src__animation__animation.AnimationStatus])),
      startPosition: dart.finalFieldType(core.double)
    }));
    return ControlledAnimation;
  });
  simple_animations_package.ControlledAnimation = simple_animations_package.ControlledAnimation$();
  dart.addTypeTests(simple_animations_package.ControlledAnimation, _is_ControlledAnimation_default);
  const _controller = dart.privateName(simple_animations_package, "_controller");
  const _animation = dart.privateName(simple_animations_package, "_animation");
  const _isDisposed = dart.privateName(simple_animations_package, "_isDisposed");
  const _waitForDelay = dart.privateName(simple_animations_package, "_waitForDelay");
  const _isCurrentlyMirroring = dart.privateName(simple_animations_package, "_isCurrentlyMirroring");
  const _is__ControlledAnimationState_default = Symbol('_is__ControlledAnimationState_default');
  simple_animations_package._ControlledAnimationState$ = dart.generic(T => {
    let AnimationOfT = () => (AnimationOfT = dart.constFn(src__animation__animation.Animation$(T)))();
    const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(simple_animations_package.ControlledAnimation) {};
    (State_SingleTickerProviderStateMixin$.new = function() {
      src__widgets__ticker_provider.SingleTickerProviderStateMixin$(simple_animations_package.ControlledAnimation)[dart.mixinNew].call(this);
      State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
    }).prototype = State_SingleTickerProviderStateMixin$.prototype;
    dart.applyMixin(State_SingleTickerProviderStateMixin$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(simple_animations_package.ControlledAnimation));
    class _ControlledAnimationState extends State_SingleTickerProviderStateMixin$ {
      initState() {
        let t0;
        this[_controller] = (t0 = new src__animation__animation_controller.AnimationController.new({vsync: this, duration: this.widget.duration}), t0.addListener(dart.fn(() => {
          this.setState(dart.fn(() => {
          }, VoidToNull()));
        }, VoidToNull())), t0.value = this.widget.startPosition, t0);
        this[_animation] = AnimationOfT()._check(this.widget.tween.chain(new src__animation__tween.CurveTween.new({curve: this.widget.curve})).animate(this[_controller]));
        if (this.widget.animationControllerStatusListener != null) {
          this[_controller].addStatusListener(this.widget.animationControllerStatusListener);
        }
        this.initialize();
        super.initState();
      }
      initialize() {
        return async.async(dart.void, (function* initialize() {
          if (this.widget.delay != null) {
            yield async.Future.delayed(this.widget.delay);
          }
          this[_waitForDelay] = false;
          this.executeInstruction();
        }).bind(this));
      }
      didUpdateWidget(oldWidget) {
        simple_animations_package.ControlledAnimation._check(oldWidget);
        this[_controller].duration = this.widget.duration;
        this.executeInstruction();
        super.didUpdateWidget(oldWidget);
      }
      executeInstruction() {
        return async.async(dart.void, (function* executeInstruction() {
          if (dart.test(this[_isDisposed]) || dart.test(this[_waitForDelay])) {
            return;
          }
          if (dart.equals(this.widget.playback, simple_animations_package.Playback.PAUSE)) {
            this[_controller].stop();
          }
          if (dart.equals(this.widget.playback, simple_animations_package.Playback.PLAY_FORWARD)) {
            this[_controller].forward();
          }
          if (dart.equals(this.widget.playback, simple_animations_package.Playback.PLAY_REVERSE)) {
            this[_controller].reverse();
          }
          if (dart.equals(this.widget.playback, simple_animations_package.Playback.START_OVER_FORWARD)) {
            this[_controller].forward({from: 0.0});
          }
          if (dart.equals(this.widget.playback, simple_animations_package.Playback.START_OVER_REVERSE)) {
            this[_controller].reverse({from: 1.0});
          }
          if (dart.equals(this.widget.playback, simple_animations_package.Playback.LOOP)) {
            this[_controller].repeat();
          }
          if (dart.equals(this.widget.playback, simple_animations_package.Playback.MIRROR) && !dart.test(this[_isCurrentlyMirroring])) {
            this[_isCurrentlyMirroring] = true;
            this[_controller].repeat({reverse: true});
          }
          if (!dart.equals(this.widget.playback, simple_animations_package.Playback.MIRROR)) {
            this[_isCurrentlyMirroring] = false;
          }
        }).bind(this));
      }
      build(context) {
        if (BuildContextAnddynamicToWidget()._check(this.widget.builder) != null) {
          return BuildContextAnddynamicToWidget()._check(this.widget.builder)(context, this[_animation].value);
        } else if (BuildContextAndWidgetAnddynamicToWidget()._check(this.widget.builderWithChild) != null && this.widget.child != null) {
          return BuildContextAndWidgetAnddynamicToWidget()._check(this.widget.builderWithChild)(context, this.widget.child, this[_animation].value);
        }
        this[_controller].stop({canceled: true});
        dart.throw(new src__foundation__assertions.FlutterError.new("I don't know how to build the animation. Make sure to either specify " + "a builder or a builderWithChild (along with a child)."));
      }
      dispose() {
        this[_isDisposed] = true;
        this[_controller].dispose();
        super.dispose();
      }
    }
    (_ControlledAnimationState.new = function() {
      this[_controller] = null;
      this[_animation] = null;
      this[_isDisposed] = false;
      this[_waitForDelay] = true;
      this[_isCurrentlyMirroring] = false;
      _ControlledAnimationState.__proto__.new.call(this);
      ;
    }).prototype = _ControlledAnimationState.prototype;
    dart.addTypeTests(_ControlledAnimationState);
    _ControlledAnimationState.prototype[_is__ControlledAnimationState_default] = true;
    dart.setMethodSignature(_ControlledAnimationState, () => ({
      __proto__: dart.getMethods(_ControlledAnimationState.__proto__),
      initialize: dart.fnType(dart.void, []),
      executeInstruction: dart.fnType(dart.void, []),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
    }));
    dart.setFieldSignature(_ControlledAnimationState, () => ({
      __proto__: dart.getFields(_ControlledAnimationState.__proto__),
      [_controller]: dart.fieldType(src__animation__animation_controller.AnimationController),
      [_animation]: dart.fieldType(src__animation__animation.Animation$(T)),
      [_isDisposed]: dart.fieldType(core.bool),
      [_waitForDelay]: dart.fieldType(core.bool),
      [_isCurrentlyMirroring]: dart.fieldType(core.bool)
    }));
    return _ControlledAnimationState;
  });
  simple_animations_package._ControlledAnimationState = simple_animations_package._ControlledAnimationState$();
  dart.addTypeTests(simple_animations_package._ControlledAnimationState, _is__ControlledAnimationState_default);
  simple_animations_package.AnimationProgress = class AnimationProgress extends core.Object {
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      super.duration = value;
    }
    get startTime() {
      return this[startTime$0];
    }
    set startTime(value) {
      super.startTime = value;
    }
    progress(time) {
      return math.max(core.double, 0.0, math.min(core.double, dart.notNull(time['-'](this.startTime).inMilliseconds) / dart.notNull(this.duration.inMilliseconds), 1.0));
    }
  };
  (simple_animations_package.AnimationProgress.new = function(opts) {
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let startTime = opts && 'startTime' in opts ? opts.startTime : null;
    this[duration$] = duration;
    this[startTime$0] = startTime;
    if (!(duration != null)) dart.assertFailed("Please specify an animation duration.");
    if (!(startTime != null)) dart.assertFailed("Please specify a start time of the animation.");
    ;
  }).prototype = simple_animations_package.AnimationProgress.prototype;
  dart.addTypeTests(simple_animations_package.AnimationProgress);
  const duration$ = Symbol("AnimationProgress.duration");
  const startTime$0 = Symbol("AnimationProgress.startTime");
  dart.setMethodSignature(simple_animations_package.AnimationProgress, () => ({
    __proto__: dart.getMethods(simple_animations_package.AnimationProgress.__proto__),
    progress: dart.fnType(core.double, [core.Duration])
  }));
  dart.setFieldSignature(simple_animations_package.AnimationProgress, () => ({
    __proto__: dart.getFields(simple_animations_package.AnimationProgress.__proto__),
    duration: dart.finalFieldType(core.Duration),
    startTime: dart.finalFieldType(core.Duration)
  }));
  dart.trackLibraries("packages/particle_background/simple_animations_package", {
    "package:particle_background/simple_animations_package.dart": simple_animations_package
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/particle_background/simple_animations_package.dart"],"names":[],"mappings":"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","file":"simple_animations_package.ddc.js"}');
  // Exports:
  return {
    simple_animations_package: simple_animations_package
  };
});

//# sourceMappingURL=simple_animations_package.ddc.js.map
