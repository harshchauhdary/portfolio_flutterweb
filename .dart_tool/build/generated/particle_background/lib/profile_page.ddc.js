define(['dart_sdk', 'packages/particle_background/responsive_widget', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, responsive_widget, material, animation, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const responsive_widget$ = responsive_widget.responsive_widget;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__drawer = material.src__material__drawer;
  const src__material__outline_button = material.src__material__outline_button;
  const src__material__raised_button = material.src__material__raised_button;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__widgets__implicit_animations = animation.src__widgets__implicit_animations;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__text = animation.src__widgets__text;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__painting__borders = animation.src__painting__borders;
  const src__painting__stadium_border = animation.src__painting__stadium_border;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__decoration_image = animation.src__painting__decoration_image;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__painting__image_resolution = animation$.src__painting__image_resolution;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__box_fit = animation$.src__painting__box_fit;
  const ui$ = ui.ui;
  const profile_page = Object.create(dart.library);
  const $add = dartx.add;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
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
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  profile_page.ProfilePage = class ProfilePage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.transparent, appBar: new src__material__app_bar.AppBar.new({elevation: 0.0, backgroundColor: src__material__colors.Colors.transparent, $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 17, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 11, name: "elevation"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 11, name: "backgroundColor"})))], src__widgets__widget_inspector._Location))})))}), drawer: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(context)) ? new src__material__drawer.Drawer.new({child: new src__widgets__scroll_view.ListView.new({padding: const$3 || (const$3 = dart.const(new src__painting__edge_insets.EdgeInsets.all(20.0))), children: JSArrayOfWidget().of([new profile_page.NavButton.new({text: "About", onPressed: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 21, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 23, name: "text"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 23, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new profile_page.NavButton.new({text: "Works", onPressed: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 21, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 23, name: "text"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 23, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new profile_page.NavButton.new({text: "Contact", onPressed: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 21, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 23, name: "text"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 23, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 24, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 19, name: "padding"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 15, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}) : null, body: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({child: new src__widgets__implicit_animations.AnimatedPadding.new({duration: new core.Duration.new({seconds: 1}), padding: new src__painting__edge_insets.EdgeInsets.only({top: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.0, left: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1, right: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1}), child: new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new profile_page.NavHeader.new({$creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 19, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$23 || (const$23 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.07, $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 19, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 21, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new profile_page.ProfileInfo.new({$creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 19, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$28 || (const$28 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1, $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 19, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 21, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new profile_page.SocialInfo.new({$creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 19, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$33 || (const$33 = dart.constList([], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 28, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 17, name: "mainAxisAlignment"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 17, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 20, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 15, name: "largeScreen"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 18, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 13, name: "duration"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 13, name: "padding"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 15, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$48 || (const$48 = dart.constList([const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 20, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 9, name: "backgroundColor"}))), const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 9, name: "appBar"}))), const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 9, name: "drawer"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 9, name: "body"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 12, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$57 || (const$57 = dart.constList([const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 7, name: "largeScreen"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (profile_page.ProfilePage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    profile_page.ProfilePage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.ProfilePage.prototype;
  dart.addTypeTests(profile_page.ProfilePage);
  dart.setMethodSignature(profile_page.ProfilePage, () => ({
    __proto__: dart.getMethods(profile_page.ProfilePage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  profile_page.NavHeader = class NavHeader extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Row.new({mainAxisAlignment: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(context)) ? src__rendering__flex.MainAxisAlignment.center : src__rendering__flex.MainAxisAlignment.spaceBetween, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: (() => {
            let t0 = JSArrayOfWidget().of([]);
            t0[$add](new profile_page.NameAF.new({$creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$59 || (const$59 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
            if (!dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(context))) t0[$add](new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new profile_page.NavButton.new({text: "About", onPressed: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 17, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$63 || (const$63 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 19, name: "text"}))), const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 19, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new profile_page.NavButton.new({text: "Works", onPressed: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 17, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$67 || (const$67 = dart.constList([const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 19, name: "text"}))), const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 19, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new profile_page.NavButton.new({text: "Contact", onPressed: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 17, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$71 || (const$71 = dart.constList([const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 19, name: "text"}))), const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 19, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 13, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$74 || (const$74 = dart.constList([const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}));
            return t0;
          })(), $creationLocationd_0dea112b090073317d4: const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 20, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$79 || (const$79 = dart.constList([const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 9, name: "mainAxisAlignment"}))), const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 9, name: "crossAxisAlignment"}))), const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 12, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$82 || (const$82 = dart.constList([const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 7, name: "largeScreen"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (profile_page.NavHeader.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    profile_page.NavHeader.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.NavHeader.prototype;
  dart.addTypeTests(profile_page.NavHeader);
  dart.setMethodSignature(profile_page.NavHeader, () => ({
    __proto__: dart.getMethods(profile_page.NavHeader.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  profile_page.NameAF = class NameAF extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__text.Text.new("HRSHCDRY", {textScaleFactor: 2.0, style: new src__painting__text_style.TextStyle.new({fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 9, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$87 || (const$87 = dart.constList([const$84 || (const$84 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 11, name: "data"}))), const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 11, name: "textScaleFactor"}))), const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 11, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 5.0, $creationLocationd_0dea112b090073317d4: const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 9, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$90 || (const$90 = dart.constList([const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 115, column: 11, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__implicit_animations.AnimatedContainer.new({duration: new core.Duration.new({seconds: 1}), height: 8.0, width: 8.0, decoration: new src__painting__box_decoration.BoxDecoration.new({shape: src__painting__box_border.BoxShape.circle, color: src__material__colors.Colors.red}), $creationLocationd_0dea112b090073317d4: const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 9, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$96 || (const$96 = dart.constList([const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 11, name: "duration"}))), const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 119, column: 11, name: "height"}))), const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 120, column: 11, name: "width"}))), const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 11, name: "decoration"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 12, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$99 || (const$99 = dart.constList([const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (profile_page.NameAF.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    profile_page.NameAF.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.NameAF.prototype;
  dart.addTypeTests(profile_page.NameAF);
  dart.setMethodSignature(profile_page.NameAF, () => ({
    __proto__: dart.getMethods(profile_page.NameAF.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  profile_page.NavButton = class NavButton extends src__widgets__framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    build(context) {
      return new src__material__outline_button.OutlineButton.new({child: new src__widgets__text.Text.new(core.String._check(this.text), {$creationLocationd_0dea112b090073317d4: const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 146, column: 14, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$102 || (const$102 = dart.constList([const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 146, column: 19, name: "data"})))], src__widgets__widget_inspector._Location))})))}), borderSide: new src__painting__borders.BorderSide.new({color: this.color}), onPressed: VoidTovoid()._check(this.onPressed), highlightedBorderColor: this.color, $creationLocationd_0dea112b090073317d4: const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 12, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$108 || (const$108 = dart.constList([const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 146, column: 7, name: "child"}))), const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 7, name: "borderSide"}))), const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 150, column: 7, name: "onPressed"}))), const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 151, column: 7, name: "highlightedBorderColor"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (profile_page.NavButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let color = opts && 'color' in opts ? opts.color : src__material__colors.Colors.red;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    this[onPressed$] = onPressed;
    this[color$] = color;
    profile_page.NavButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.NavButton.prototype;
  dart.addTypeTests(profile_page.NavButton);
  const text$ = Symbol("NavButton.text");
  const onPressed$ = Symbol("NavButton.onPressed");
  const color$ = Symbol("NavButton.color");
  dart.setMethodSignature(profile_page.NavButton, () => ({
    __proto__: dart.getMethods(profile_page.NavButton.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(profile_page.NavButton, () => ({
    __proto__: dart.getFields(profile_page.NavButton.__proto__),
    text: dart.finalFieldType(dart.dynamic),
    onPressed: dart.finalFieldType(dart.dynamic),
    color: dart.finalFieldType(ui$.Color)
  }));
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  let const$119;
  let const$120;
  let const$121;
  let const$122;
  let const$123;
  let const$124;
  let const$125;
  let const$126;
  let const$127;
  let const$128;
  let const$129;
  let const$130;
  let const$131;
  let const$132;
  let const$133;
  let const$134;
  let const$135;
  let const$136;
  let const$137;
  let const$138;
  let const$139;
  let const$140;
  let const$141;
  let const$142;
  let const$143;
  let const$144;
  let const$145;
  let const$146;
  let const$147;
  let const$148;
  let const$149;
  let const$150;
  let const$151;
  let const$152;
  let const$153;
  let const$154;
  let const$155;
  let const$156;
  let const$157;
  let const$158;
  let const$159;
  let const$160;
  let const$161;
  let const$162;
  let const$163;
  let const$164;
  let const$165;
  let const$166;
  let const$167;
  let const$168;
  let const$169;
  let const$170;
  let const$171;
  let const$172;
  let const$173;
  let const$174;
  let const$175;
  let const$176;
  let const$177;
  let const$178;
  let const$179;
  let const$180;
  let const$181;
  let const$182;
  let const$183;
  let const$184;
  let const$185;
  profile_page.ProfileInfo = class ProfileInfo extends src__widgets__framework.StatelessWidget {
    get profileData() {
      return this[profileData];
    }
    set profileData(value) {
      super.profileData = value;
    }
    profileImage(context) {
      return new src__widgets__container.Container.new({height: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(src__widgets__framework.BuildContext._check(context))) ? dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.height) * 0.25 : dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.width) * 0.25, width: dart.test(responsive_widget$.ResponsiveWidget.isSmallScreen(src__widgets__framework.BuildContext._check(context))) ? dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.height) * 0.25 : dart.notNull(src__widgets__media_query.MediaQuery.of(src__widgets__framework.BuildContext._check(context)).size.width) * 0.25, decoration: new src__painting__box_decoration.BoxDecoration.new({shape: src__painting__box_border.BoxShape.circle, image: new src__painting__decoration_image.DecorationImage.new({image: new src__painting__image_resolution.AssetImage.new("example.png"), alignment: src__painting__alignment.Alignment.center, fit: src__painting__box_fit.BoxFit.cover})}), $creationLocationd_0dea112b090073317d4: const$168 || (const$168 = dart.const(new src__widgets__widget_inspector._Location.new({line: 157, column: 28, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$167 || (const$167 = dart.constList([const$164 || (const$164 = dart.const(new src__widgets__widget_inspector._Location.new({line: 158, column: 9, name: "height"}))), const$165 || (const$165 = dart.const(new src__widgets__widget_inspector._Location.new({line: 161, column: 9, name: "width"}))), const$166 || (const$166 = dart.const(new src__widgets__widget_inspector._Location.new({line: 164, column: 9, name: "decoration"})))], src__widgets__widget_inspector._Location))})))});
    }
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([src__widgets__framework.Widget._check(this.profileImage(context)), this.profileData]), $creationLocationd_0dea112b090073317d4: const$173 || (const$173 = dart.const(new src__widgets__widget_inspector._Location.new({line: 238, column: 20, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$172 || (const$172 = dart.constList([const$169 || (const$169 = dart.const(new src__widgets__widget_inspector._Location.new({line: 239, column: 9, name: "mainAxisAlignment"}))), const$170 || (const$170 = dart.const(new src__widgets__widget_inspector._Location.new({line: 240, column: 9, name: "crossAxisAlignment"}))), const$171 || (const$171 = dart.const(new src__widgets__widget_inspector._Location.new({line: 241, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), smallScreen: new src__widgets__basic.Column.new({mainAxisSize: src__rendering__flex.MainAxisSize.max, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([src__widgets__framework.Widget._check(this.profileImage(context)), new src__widgets__basic.SizedBox.new({height: dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) * 0.1, $creationLocationd_0dea112b090073317d4: const$176 || (const$176 = dart.const(new src__widgets__widget_inspector._Location.new({line: 248, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$175 || (const$175 = dart.constList([const$174 || (const$174 = dart.const(new src__widgets__widget_inspector._Location.new({line: 249, column: 13, name: "height"})))], src__widgets__widget_inspector._Location))})))}), this.profileData]), $creationLocationd_0dea112b090073317d4: const$181 || (const$181 = dart.const(new src__widgets__widget_inspector._Location.new({line: 243, column: 20, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$180 || (const$180 = dart.constList([const$177 || (const$177 = dart.const(new src__widgets__widget_inspector._Location.new({line: 244, column: 9, name: "mainAxisSize"}))), const$178 || (const$178 = dart.const(new src__widgets__widget_inspector._Location.new({line: 245, column: 9, name: "mainAxisAlignment"}))), const$179 || (const$179 = dart.const(new src__widgets__widget_inspector._Location.new({line: 246, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$185 || (const$185 = dart.const(new src__widgets__widget_inspector._Location.new({line: 237, column: 12, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$184 || (const$184 = dart.constList([const$182 || (const$182 = dart.const(new src__widgets__widget_inspector._Location.new({line: 238, column: 7, name: "largeScreen"}))), const$183 || (const$183 = dart.const(new src__widgets__widget_inspector._Location.new({line: 243, column: 7, name: "smallScreen"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (profile_page.ProfileInfo.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[profileData] = new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("Hi there! My name is", {textScaleFactor: 2.0, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.red}), $creationLocationd_0dea112b090073317d4: const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 180, column: 7, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$113 || (const$113 = dart.constList([const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 181, column: 9, name: "data"}))), const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 182, column: 9, name: "textScaleFactor"}))), const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 183, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Harsh", {textScaleFactor: 5.0, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: const$119 || (const$119 = dart.const(new src__widgets__widget_inspector._Location.new({line: 185, column: 7, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$118 || (const$118 = dart.constList([const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 186, column: 9, name: "data"}))), const$116 || (const$116 = dart.const(new src__widgets__widget_inspector._Location.new({line: 187, column: 9, name: "textScaleFactor"}))), const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 188, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 193, column: 7, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$121 || (const$121 = dart.constList([const$120 || (const$120 = dart.const(new src__widgets__widget_inspector._Location.new({line: 194, column: 9, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n" + "sed do eiusmod tempor incididunt ut labore et dolore \n" + "magna aliqua. Ut enim ad minim veniam, quis", {softWrap: true, textScaleFactor: 1.5, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white70}), $creationLocationd_0dea112b090073317d4: const$128 || (const$128 = dart.const(new src__widgets__widget_inspector._Location.new({line: 196, column: 7, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$127 || (const$127 = dart.constList([const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 196, column: 11, name: "data"}))), const$124 || (const$124 = dart.const(new src__widgets__widget_inspector._Location.new({line: 200, column: 9, name: "softWrap"}))), const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 201, column: 9, name: "textScaleFactor"}))), const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 202, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 20.0, $creationLocationd_0dea112b090073317d4: const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 204, column: 7, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$130 || (const$130 = dart.constList([const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 205, column: 9, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceEvenly, children: JSArrayOfWidget().of([new src__material__raised_button.RaisedButton.new({shape: new src__painting__stadium_border.StadiumBorder.new(), child: new src__widgets__text.Text.new("Downloads", {$creationLocationd_0dea112b090073317d4: const$134 || (const$134 = dart.const(new src__widgets__widget_inspector._Location.new({line: 212, column: 20, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$133 || (const$133 = dart.constList([const$132 || (const$132 = dart.const(new src__widgets__widget_inspector._Location.new({line: 212, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), color: src__material__colors.Colors.red, onPressed: dart.fn(() => {
              }, VoidToNull()), padding: new src__painting__edge_insets.EdgeInsets.all(10.0), $creationLocationd_0dea112b090073317d4: const$141 || (const$141 = dart.const(new src__widgets__widget_inspector._Location.new({line: 210, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$140 || (const$140 = dart.constList([const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 211, column: 13, name: "shape"}))), const$136 || (const$136 = dart.const(new src__widgets__widget_inspector._Location.new({line: 212, column: 13, name: "child"}))), const$137 || (const$137 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 13, name: "color"}))), const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 214, column: 13, name: "onPressed"}))), const$139 || (const$139 = dart.const(new src__widgets__widget_inspector._Location.new({line: 215, column: 13, name: "padding"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 20.0, $creationLocationd_0dea112b090073317d4: const$144 || (const$144 = dart.const(new src__widgets__widget_inspector._Location.new({line: 217, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$143 || (const$143 = dart.constList([const$142 || (const$142 = dart.const(new src__widgets__widget_inspector._Location.new({line: 218, column: 13, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__material__outline_button.OutlineButton.new({borderSide: new src__painting__borders.BorderSide.new({color: src__material__colors.Colors.red}), shape: new src__painting__stadium_border.StadiumBorder.new(), child: new src__widgets__text.Text.new("Say Hi!", {$creationLocationd_0dea112b090073317d4: const$147 || (const$147 = dart.const(new src__widgets__widget_inspector._Location.new({line: 225, column: 20, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$146 || (const$146 = dart.constList([const$145 || (const$145 = dart.const(new src__widgets__widget_inspector._Location.new({line: 225, column: 25, name: "data"})))], src__widgets__widget_inspector._Location))})))}), color: src__material__colors.Colors.red, onPressed: dart.fn(() => {
              }, VoidToNull()), padding: new src__painting__edge_insets.EdgeInsets.all(10.0), $creationLocationd_0dea112b090073317d4: const$155 || (const$155 = dart.const(new src__widgets__widget_inspector._Location.new({line: 220, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$154 || (const$154 = dart.constList([const$148 || (const$148 = dart.const(new src__widgets__widget_inspector._Location.new({line: 221, column: 13, name: "borderSide"}))), const$149 || (const$149 = dart.const(new src__widgets__widget_inspector._Location.new({line: 224, column: 13, name: "shape"}))), const$150 || (const$150 = dart.const(new src__widgets__widget_inspector._Location.new({line: 225, column: 13, name: "child"}))), const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 226, column: 13, name: "color"}))), const$152 || (const$152 = dart.const(new src__widgets__widget_inspector._Location.new({line: 227, column: 13, name: "onPressed"}))), const$153 || (const$153 = dart.const(new src__widgets__widget_inspector._Location.new({line: 228, column: 13, name: "padding"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$159 || (const$159 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 7, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$158 || (const$158 = dart.constList([const$156 || (const$156 = dart.const(new src__widgets__widget_inspector._Location.new({line: 208, column: 9, name: "mainAxisAlignment"}))), const$157 || (const$157 = dart.const(new src__widgets__widget_inspector._Location.new({line: 209, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$163 || (const$163 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 23, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$162 || (const$162 = dart.constList([const$160 || (const$160 = dart.const(new src__widgets__widget_inspector._Location.new({line: 178, column: 5, name: "crossAxisAlignment"}))), const$161 || (const$161 = dart.const(new src__widgets__widget_inspector._Location.new({line: 179, column: 5, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    profile_page.ProfileInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.ProfileInfo.prototype;
  dart.addTypeTests(profile_page.ProfileInfo);
  const profileData = Symbol("ProfileInfo.profileData");
  dart.setMethodSignature(profile_page.ProfileInfo, () => ({
    __proto__: dart.getMethods(profile_page.ProfileInfo.__proto__),
    profileImage: dart.fnType(dart.dynamic, [dart.dynamic]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(profile_page.ProfileInfo, () => ({
    __proto__: dart.getFields(profile_page.ProfileInfo.__proto__),
    profileData: dart.finalFieldType(src__widgets__basic.Column)
  }));
  let const$186;
  let const$187;
  let const$188;
  let const$189;
  let const$190;
  let const$191;
  let const$192;
  let const$193;
  let const$194;
  let const$195;
  let const$196;
  let const$197;
  let const$198;
  let const$199;
  let const$200;
  let const$201;
  let const$202;
  let const$203;
  let const$204;
  let const$205;
  let const$206;
  let const$207;
  let const$208;
  let const$209;
  let const$210;
  let const$211;
  let const$212;
  let const$213;
  let const$214;
  let const$215;
  let const$216;
  let const$217;
  let const$218;
  let const$219;
  let const$220;
  let const$221;
  let const$222;
  let const$223;
  let const$224;
  let const$225;
  let const$226;
  let const$227;
  let const$228;
  let const$229;
  let const$230;
  let const$231;
  let const$232;
  let const$233;
  let const$234;
  let const$235;
  let const$236;
  let const$237;
  let const$238;
  let const$239;
  let const$240;
  let const$241;
  profile_page.SocialInfo = class SocialInfo extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new responsive_widget$.ResponsiveWidget.new({largeScreen: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.spaceBetween, children: JSArrayOfWidget().of([new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new profile_page.NavButton.new({text: "Github", onPressed: dart.fn(() => {
                  }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: const$190 || (const$190 = dart.const(new src__widgets__widget_inspector._Location.new({line: 268, column: 15, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$189 || (const$189 = dart.constList([const$186 || (const$186 = dart.const(new src__widgets__widget_inspector._Location.new({line: 269, column: 17, name: "text"}))), const$187 || (const$187 = dart.const(new src__widgets__widget_inspector._Location.new({line: 270, column: 17, name: "onPressed"}))), const$188 || (const$188 = dart.const(new src__widgets__widget_inspector._Location.new({line: 271, column: 17, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new profile_page.NavButton.new({text: "Twitter", onPressed: dart.fn(() => {
                  }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: const$195 || (const$195 = dart.const(new src__widgets__widget_inspector._Location.new({line: 273, column: 15, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$194 || (const$194 = dart.constList([const$191 || (const$191 = dart.const(new src__widgets__widget_inspector._Location.new({line: 274, column: 17, name: "text"}))), const$192 || (const$192 = dart.const(new src__widgets__widget_inspector._Location.new({line: 275, column: 17, name: "onPressed"}))), const$193 || (const$193 = dart.const(new src__widgets__widget_inspector._Location.new({line: 276, column: 17, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new profile_page.NavButton.new({text: "Facebook", onPressed: dart.fn(() => {
                  }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: const$200 || (const$200 = dart.const(new src__widgets__widget_inspector._Location.new({line: 278, column: 15, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$199 || (const$199 = dart.constList([const$196 || (const$196 = dart.const(new src__widgets__widget_inspector._Location.new({line: 279, column: 17, name: "text"}))), const$197 || (const$197 = dart.const(new src__widgets__widget_inspector._Location.new({line: 280, column: 17, name: "onPressed"}))), const$198 || (const$198 = dart.const(new src__widgets__widget_inspector._Location.new({line: 281, column: 17, name: "color"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$204 || (const$204 = dart.const(new src__widgets__widget_inspector._Location.new({line: 265, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$203 || (const$203 = dart.constList([const$201 || (const$201 = dart.const(new src__widgets__widget_inspector._Location.new({line: 266, column: 13, name: "mainAxisAlignment"}))), const$202 || (const$202 = dart.const(new src__widgets__widget_inspector._Location.new({line: 267, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Harsh Chaudhary ©️2019", {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.grey}), $creationLocationd_0dea112b090073317d4: const$209 || (const$209 = dart.const(new src__widgets__widget_inspector._Location.new({line: 285, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$208 || (const$208 = dart.constList([const$205 || (const$205 = dart.const(new src__widgets__widget_inspector._Location.new({line: 286, column: 13, name: "data"}))), const$206 || (const$206 = dart.const(new src__widgets__widget_inspector._Location.new({line: 287, column: 13, name: "textAlign"}))), const$207 || (const$207 = dart.const(new src__widgets__widget_inspector._Location.new({line: 288, column: 13, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$213 || (const$213 = dart.const(new src__widgets__widget_inspector._Location.new({line: 262, column: 20, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$212 || (const$212 = dart.constList([const$210 || (const$210 = dart.const(new src__widgets__widget_inspector._Location.new({line: 263, column: 9, name: "mainAxisAlignment"}))), const$211 || (const$211 = dart.const(new src__widgets__widget_inspector._Location.new({line: 264, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), smallScreen: new src__widgets__basic.Column.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new profile_page.NavButton.new({text: "Github", onPressed: dart.fn(() => {
              }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: const$218 || (const$218 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$217 || (const$217 = dart.constList([const$214 || (const$214 = dart.const(new src__widgets__widget_inspector._Location.new({line: 298, column: 13, name: "text"}))), const$215 || (const$215 = dart.const(new src__widgets__widget_inspector._Location.new({line: 299, column: 13, name: "onPressed"}))), const$216 || (const$216 = dart.const(new src__widgets__widget_inspector._Location.new({line: 300, column: 13, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new profile_page.NavButton.new({text: "Twitter", onPressed: dart.fn(() => {
              }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: const$223 || (const$223 = dart.const(new src__widgets__widget_inspector._Location.new({line: 302, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$222 || (const$222 = dart.constList([const$219 || (const$219 = dart.const(new src__widgets__widget_inspector._Location.new({line: 303, column: 13, name: "text"}))), const$220 || (const$220 = dart.const(new src__widgets__widget_inspector._Location.new({line: 304, column: 13, name: "onPressed"}))), const$221 || (const$221 = dart.const(new src__widgets__widget_inspector._Location.new({line: 305, column: 13, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new profile_page.NavButton.new({text: "Facebook", onPressed: dart.fn(() => {
              }, VoidToNull()), color: src__material__colors.Colors.blue, $creationLocationd_0dea112b090073317d4: const$228 || (const$228 = dart.const(new src__widgets__widget_inspector._Location.new({line: 307, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$227 || (const$227 = dart.constList([const$224 || (const$224 = dart.const(new src__widgets__widget_inspector._Location.new({line: 308, column: 13, name: "text"}))), const$225 || (const$225 = dart.const(new src__widgets__widget_inspector._Location.new({line: 309, column: 13, name: "onPressed"}))), const$226 || (const$226 = dart.const(new src__widgets__widget_inspector._Location.new({line: 310, column: 13, name: "color"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Harsh Chaudhary ©️2019", {textAlign: ui$.TextAlign.center, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.grey}), $creationLocationd_0dea112b090073317d4: const$233 || (const$233 = dart.const(new src__widgets__widget_inspector._Location.new({line: 312, column: 11, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$232 || (const$232 = dart.constList([const$229 || (const$229 = dart.const(new src__widgets__widget_inspector._Location.new({line: 313, column: 13, name: "data"}))), const$230 || (const$230 = dart.const(new src__widgets__widget_inspector._Location.new({line: 314, column: 13, name: "textAlign"}))), const$231 || (const$231 = dart.const(new src__widgets__widget_inspector._Location.new({line: 315, column: 13, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$237 || (const$237 = dart.const(new src__widgets__widget_inspector._Location.new({line: 294, column: 20, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$236 || (const$236 = dart.constList([const$234 || (const$234 = dart.const(new src__widgets__widget_inspector._Location.new({line: 295, column: 9, name: "crossAxisAlignment"}))), const$235 || (const$235 = dart.const(new src__widgets__widget_inspector._Location.new({line: 296, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$241 || (const$241 = dart.const(new src__widgets__widget_inspector._Location.new({line: 261, column: 12, file: "org-dartlang-app:///packages/particle_background/profile_page.dart", parameterLocations: const$240 || (const$240 = dart.constList([const$238 || (const$238 = dart.const(new src__widgets__widget_inspector._Location.new({line: 262, column: 7, name: "largeScreen"}))), const$239 || (const$239 = dart.const(new src__widgets__widget_inspector._Location.new({line: 294, column: 7, name: "smallScreen"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (profile_page.SocialInfo.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    profile_page.SocialInfo.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = profile_page.SocialInfo.prototype;
  dart.addTypeTests(profile_page.SocialInfo);
  dart.setMethodSignature(profile_page.SocialInfo, () => ({
    __proto__: dart.getMethods(profile_page.SocialInfo.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.trackLibraries("packages/particle_background/profile_page", {
    "package:particle_background/profile_page.dart": profile_page
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/particle_background/profile_page.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO4B;AACxB,YAAO,2DACQ,2DACa,kDAChB,kDACK,sBACa,0oBAED,kDAAc,OAAO,KACxC,6CACS,qDACU,+EAAe,mBACZ,sBAChB,sCACQ,oBACK;ymBAEb,sCACQ,oBACK;6mBAEb,sCACQ,sBACK;+oDAKnB,YACA,6EACG,qEACK,gCAAkB,cACR,qDACsB,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,WACD,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,YACD,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,cAEvC,0DACQ,uDAC0B,wDACnB,sBAChB,gXACA,8CAC6C,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,mdAE/C,kXACA,8CAC6C,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,kdAE/C;IAQhB;;;QA5DuB;;AAAQ,4DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAgEpB;AACxB,YAAO,2DACQ,8DACyB,kDAAc,OAAO,KACjC,gDACA,yEACe;;qBAErC;AAEA,2BAAsB,kDAAc,OAAO,aACzC,2CACoB,sBAChB,sCACQ,oBACK;inBAEb,sCACQ,oBACK;inBAEb,sCACQ,sBACK;;;;IAO3B;;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,4CACa,sBAChB,gCACE,8BACiB,YACV,yDACkB,2uBAG3B,6CACS,kdAET,uEACY,gCAAkB,aACpB,YACD,iBACK,4DACM,kDACF;IAKxB;;;;;;EACF;;;;;;;;;;;;;;;;IAGQ;;;;;;IACA;;;;;;IACM;;;;;;UAUc;AACxB,YAAO,6DACE,mDAAK,4eACA,kDACH,6CAEE,yCACa;IAE5B;;;QAhBS;QACU;QACA;QACV,+CAAe;;IAFL;IACA;IACV;AACH,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAoCf;;;;;;iBApBO;AAAY,0EACM,8FAAc,OAAO,MACL,aAAxB,AAAY,AAAK,oFAAd,OAAO,kBAAgB,OACH,aAAvB,AAAY,AAAK,oFAAd,OAAO,iBAAe,uBAClB,8FAAc,OAAO,MACJ,aAAxB,AAAY,AAAK,oFAAd,OAAO,kBAAgB,OACH,aAAvB,AAAY,AAAK,oFAAd,OAAO,iBAAe,kBAC9B,4DAIM,kDACT,gEACE,mDAAW,2BACG,gDACT;IAGjB;UA6DqB;AACxB,YAAO,2DACQ,oDAC0B,wEACE,0DACrB,4DAAC,kBAAa,OAAO,IAAG,gxBAE/B,kDACgB,0DACU,+DACnB,4DAChB,kBAAa,OAAO,IACpB,8CAC6C,aAAxB,AAAY,AAAK,wCAAd,OAAO,iBAAgB,0dAE/C;IAIR;;;;IA9EM,oBAAc,wDACqB,yDACrB,sBAChB,gCACE,0CACiB,YACV,oDAAwB,+vBAEjC,gCACE,2BACiB,YACV,oDACS,gDACS,kvBAG3B,8CACU,ydAEV,gCACE,gEACA,4DACA,0DACU,uBACO,YACV,oDAAwB,u4BAEjC,8CACU,ydAEV,oDACuC,8DACnB,sBAChB,0DACS,8DACA,gCAAK,weACE,6CACH;yCACS,8CAAI,q+BAE1B,6CACS,0dAET,iEACc,kDACI,2CAET,8DACA,gCAAK,seACE,6CACH;yCACS,8CAAI;;;EA4BpC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,2DACQ,oDAC0B,+DACnB,sBAChB,oDACuC,wDACnB,sBAChB,sCACQ,qBACK;2CACG,4vBAEhB,sCACQ,sBACK;2CACG,4vBAEhB,sCACQ,uBACK;2CACG,k2CAIpB,gCACE,sCACqB,6BACd,oDACS,+2CAKT,wDAC4B,2DACrB,sBAChB,sCACQ,qBACK;uCACG,4vBAEhB,sCACQ,sBACK;uCACG,4vBAEhB,sCACQ,uBACK;uCACG,4vBAEhB,gCACE,sCACqB,6BACd,oDACS;IAM1B;;;;;;EACF","file":"profile_page.ddc.js"}');
  // Exports:
  return {
    profile_page: profile_page
  };
});

//# sourceMappingURL=profile_page.ddc.js.map
