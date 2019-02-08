$(function () {
  const controller1 = new ScrollMagic.Controller({container: "#container", vertical: false, addIndicators: true});

  $(document).on("click", "a[href^='#']", function(e) {
    let id = $(this).attr("href");
    let px = $(this).attr("data-px");
    console.log(px);
    if ($(id).length > 0) {
      e.preventDefault();

      controller1.scrollTo(scene1);
      // controller1.scrollTo(1000);
    }
  })

  const scene1 = new ScrollMagic.Scene({triggerElement: "#trigger_1", triggerHook: 'onLeave', offset: -225, duration: 500 })
  .addIndicators()
    .on('enter leave', () => {
      // console.log('test');
    })
    // .triggerHook(-265);
    // .setClassToggle('.roadmap__block', 'roadmap__block_1');

  // const scene2 = new ScrollMagic.Scene({triggerElement: "#trigger_1", triggerHook: "onLeave", duration: 1800})
  //   .setClassToggle('.roadmap__block', 'roadmap__block_2');

  // const scene3 = new ScrollMagic.Scene({triggerElement: "#trigger_2", triggerHook: "onLeave", offset: -265, duration: 1111})
  //   .setClassToggle('.roadmap__block', 'roadmap__block_3');

  // const scene4 = new ScrollMagic.Scene({triggerElement: "#trigger_1", triggerHook: "onLeave", offset: -265, duration: 1105 })
  //   .on('enter leave', function (e) {
  //     $(".timeline__content_bold").text("lol")}
  //   );

  //   const scene6 = new ScrollMagic.Scene({triggerElement: "#trigger_111", triggerHook: "onLeave", offset: -265, })
  //   .on('enter leave', function (e) {
  //     $(".timeline__content_bold").text("lolololololololololololol")}
  //   );

  // const scene5 = new ScrollMagic.Scene({triggerElement: "#trigger_2", triggerHook: "onLeave", offset: -265, })
  // .on('enter leave', function (e) {
  //   $(".timeline__content_bold").text("ne lol ne lol ne lol")}
  // );



  controller1.addScene([
    scene1,
    // scene2,
    // scene3,
    // scene4,
    // scene5,
    // scene6,
  ]);



  // var start = scene6.scrollOffset();
  // var end = scene6.scrollOffset() + scene6.duration();
  // console.log("the scene starts at", start, "and ends at", end);

  // const scene4 = new ScrollMagic.Scene({triggerElement: "#trigger_1", offset: -265, duration: 1800}})
  //   // .setTween(TweenMax.to("#container2 .animated", 0.5, {backgroundColor: "green"}))
  //   // .setPin("#container2 .animated");
  //   .setClassToggle('.roadmap__block', 'roadmap__block_3');
// });

        // const scene1 = new ScrollMagic.Scene({triggerElement: "#trigger_1",  duration: 540})
  //   .addTo(controller1)
  //   .setTween(TweenMax.to("#container #shift_2", 0.5, {color: "rgba(0, 0, 0)"}))

  //   const scene2 = new ScrollMagic.Scene({triggerElement: "#trigger_1",  duration: 540})
  //   .addTo(controller1)
  //   .setTween(TweenMax.to("#container #shift_1", 0.5, {color: "rgba(0, 0, 0, 0.32)"}))

  //   const scene3 = new ScrollMagic.Scene({triggerElement: "#trigger_1",  duration: 540})
  //   .addTo(controller1)
  //   .setTween(TweenMax.to("#container #title_1", 0.5, {color: "#E6E5E5"}))

  //   const scene4 = new ScrollMagic.Scene({triggerElement: "#trigger_1",  duration: 540})
  //   .addTo(controller1)
  //   .setTween(TweenMax.to("#container #title_2", 0.5, {color: "rgba(0, 0, 0)"}))

  //   const scene5 = new ScrollMagic.Scene({triggerElement: "#trigger_1",  duration: 540})
  //   .addTo(controller1)
  //   .setTween(TweenMax.to("#container .roadmap__titles", 0.5, {transform: "translateX(-260px)"}))

  //   const scene6 = new ScrollMagic.Scene({triggerElement: "#trigger_2",  duration: 391})
  //   .addTo(controller1)
  //   .setTween(TweenMax.to("#container #title_2", 0.5, {color: "#E6E5E5"}))

  //   const scene7 = new ScrollMagic.Scene({triggerElement: "#trigger_2",  duration: 391})
  //   .addTo(controller1)
  //   .setTween(TweenMax.to("#container .roadmap__titles", 0.5, {transform: "translateX(-270px)"}))

  //   const scene8 = new ScrollMagic.Scene({triggerElement: "#trigger_2",  duration: 391})
  //   .addTo(controller1)
  //   .setTween(TweenMax.to("#container #title_3", 0.5, {color: "#000"}))

  //   const scene9 = new ScrollMagic.Scene({triggerElement: "#trigger_2",  duration: 391})
  //   .addTo(controller1)
  //   .setTween(TweenMax.to("#container #shift_3", 0.5, {color: "#000"}))

  //   const scene10 = new ScrollMagic.Scene({triggerElement: "#trigger_2",  duration: 391})
  //   .addTo(controller1)
  //   .setTween(TweenMax.to("#container #shift_2", 0.5, {color: "rgba(0, 0, 0, 0.32)"}))
});
