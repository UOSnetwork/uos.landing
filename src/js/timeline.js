$(function () {
  const controller1 = new ScrollMagic.Controller({container: "#container", vertical: false, addIndicators: true});

  $(document).on("click", "a[href^='#']", function(e) {
    let id = $(this).attr("href");
    if ($(id).length > 0) {
      e.preventDefault();
      console.log($(id).selector);

      if ($(id).selector === '#shift_1') {
        controller1.scrollTo(0);
      } else if ($(id).selector === '#shift_2') {
        controller1.scrollTo(scene1);
      } else if ($(id).selector === '#shift_3') {
        controller1.scrollTo(scene2);
      }
    }
  })

  hideText = (id) => {
    content = $(".timeline__content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
      $(content[i]).removeClass("timeline__content_active");
    }
    $(id).addClass("timeline__content_active");
  }

  hideText("#content_1");


  const scene1 = new ScrollMagic.Scene({triggerElement: "#trigger_1", triggerHook: 'onLeave', offset: -140,})
  .addIndicators()
  .setClassToggle('.roadmap__block', 'roadmap__block_2')
  .on('leave', () => {
    scene1.setClassToggle('.roadmap__block', 'roadmap__block_2');
    // $("#title_1 span").addClass("subtitle");
  })
  // .on('progress leave', () => {
  //   hideText('#content_2');
  // })

  // const scene1_1 = new ScrollMagic.Scene({triggerElement: "#trigger_1", triggerHook: 'onLeave ', offset: -140})
  //   .on('progress', () => {
  //     hideText('#content_2');
  //   })

  const scene2 = new ScrollMagic.Scene({triggerElement: "#trigger_2", triggerHook: "onLeave", offset: -140})
  .addIndicators()
  .removeClassToggle(false)
  .setClassToggle('.roadmap__block', 'roadmap__block_3')
  .on('leave', () => {
    scene2.setClassToggle('.roadmap__block', 'roadmap__block_3');
  })
  // .on('progress leave', () => {
  //   hideText('#content_3');
  // })

  // const scene2_1 = new ScrollMagic.Scene({triggerElement: "#trigger_2", triggerHook: 'onLeave ', offset: -140,})
  //   .on('progress', () => {
  //     hideText('#content_3');
  //   })

  // const scene2_1 = new ScrollMagic.Scene({triggerElement: "#trigger_1", triggerHook: 'onEnter', offset: -140, duration: 600})
  //   .on('enter leave', () => {
  //     hideText('#content_1');
  //   })

  // const scene1_2 = new ScrollMagic.Scene({triggerElement: "#trigger_1-2", triggerHook: "onLeave", offset: -140})
  // .addIndicators()
  // .on('enter ', () => {
  //   scene2.setClassToggle('.roadmap__block', 'roadmap__block_3');
  // })

  controller1.addScene([
    scene1,
    scene2,
    // scene1_1,
    // scene2_1,
    // scene3,
    // scene4,
    // scene5,
    // scene6,
  ]);
)});
