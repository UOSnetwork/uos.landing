$(function () {
  const controller1 = new ScrollMagic.Controller({container: "#container", vertical: false, addIndicators: false});

  $(document).on("click", "a[href^='#']", function(e) {
    let id = $(this).attr("href");
    if ($(id).length > 0) {
      e.preventDefault();

      if ($(id).selector === '#shift_1') {
        controller1.scrollTo(0);
      } else if ($(id).selector === '#shift_2') {
        controller1.scrollTo(scene1);
      } else if ($(id).selector === '#shift_3') {
        controller1.scrollTo(scene2);
      } else if ($(id).selector === '#flag_1') {
        controller1.scrollTo(scene1);
      } else if ($(id).selector === '#flag_2') {
        controller1.scrollTo(flag2);
      } else if ($(id).selector === '#flag_3') {
        controller1.scrollTo(flag3);
      } else if ($(id).selector === '#flag_4') {
        controller1.scrollTo(flag4);
      } else if ($(id).selector === '#flag_5') {
        controller1.scrollTo(flag5);
      } else if ($(id).selector === '#flag_6') {
        controller1.scrollTo(flag6);
      } else if ($(id).selector === '#flag_7') {
        controller1.scrollTo(flag7);
      } else if ($(id).selector === '#flag_8') {
        controller1.scrollTo(flag8);
      } else if ($(id).selector === '#flag_9') {
        controller1.scrollTo(flag9);
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

  hideText("#content_0");


  const scene1 = new ScrollMagic.Scene({triggerElement: "#trigger_1", triggerHook: 'onLeave', offset: -200})
  .setClassToggle('.roadmap__block', 'roadmap__block_2')
  .on('leave', () => {
    scene1.setClassToggle('.roadmap__block', 'roadmap__block_2');
    $("#flag_1").removeClass("timeline__flag_red").text('1');
    $("#flag_1").parent().parent().removeClass("timeline__step_red");
  })
  .on('enter', () => {
    $("#flag_1").addClass("timeline__flag_red").text('');
    $("#flag_1").parent().parent().addClass("timeline__step_red");
    hideText('#content_1');
  })

  const scene2 = new ScrollMagic.Scene({triggerElement: "#trigger_2", triggerHook: "onLeave", offset: -200})
  .removeClassToggle(false)
  .setClassToggle('.roadmap__block', 'roadmap__block_3')
  .on('leave', () => {
    scene2.setClassToggle('.roadmap__block', 'roadmap__block_3');
    $("#flag_9").removeClass("timeline__flag_red").text('2');
    $("#flag_9").parent().parent().removeClass("timeline__step_red");
  })
  .on('enter', () => {
    $("#flag_9").addClass("timeline__flag_red").text('');
    $("#flag_9").parent().parent().addClass("timeline__step_red");
    hideText('#content_9');

  })

  const flag1 = new ScrollMagic.Scene({triggerElement: "#trigger_1", triggerHook: 'onLeave', offset: -200, duration: 852})
    .on('leave', () => {
      hideText('#content_1');
    })
    .on('leave', () => {
      hideText('#content_0');
    })

  const flag2 = new ScrollMagic.Scene({triggerElement: "#flag_2", triggerHook: "onLeave", offset: -150, duration: 120})
    .on('leave', () => {
      hideText('#content_1');
      $("#flag_2").removeClass("timeline__flag_red").text('4');
      $("#flag_2").parent().parent().removeClass("timeline__step_red");
    })
    .on('enter', () => {
      hideText('#content_2');
      $("#flag_2").addClass("timeline__flag_red").text('');
      $("#flag_2").parent().parent().addClass("timeline__step_red");
    })

    const flag3 = new ScrollMagic.Scene({triggerElement: "#flag_3", triggerHook: "onLeave", offset: -150, duration: 120})
    .on('leave', () => {
      hideText('#content_2');
      $("#flag_3").removeClass("timeline__flag_red").text('3');
      $("#flag_3").parent().parent().removeClass("timeline__step_red");
    })
    .on('enter', () => {
      hideText('#content_3');
      $("#flag_3").addClass("timeline__flag_red").text('');
      $("#flag_3").parent().parent().addClass("timeline__step_red");
    })

    const flag4 = new ScrollMagic.Scene({triggerElement: "#flag_4", triggerHook: "onLeave", offset: -150, duration: 120})
    .on('leave', () => {
      hideText('#content_3');
      $("#flag_4").removeClass("timeline__flag_red").text('4');
      $("#flag_4").parent().parent().removeClass("timeline__step_red");
    })
    .on('enter', () => {
      hideText('#content_4');
      $("#flag_4").addClass("timeline__flag_red").text('');
      $("#flag_4").parent().parent().addClass("timeline__step_red");
    })

    const flag5 = new ScrollMagic.Scene({triggerElement: "#flag_5", triggerHook: "onLeave", offset: -150, duration: 180})
    .on('leave', () => {
      hideText('#content_4');
      $("#flag_5").removeClass("timeline__flag_red").text('3');
      $("#flag_5").parent().parent().removeClass("timeline__step_red");
    })
    .on('enter', () => {
      hideText('#content_5');
      $("#flag_5").addClass("timeline__flag_red").text('');
      $("#flag_5").parent().parent().addClass("timeline__step_red");
    })

    const flag6 = new ScrollMagic.Scene({triggerElement: "#flag_6", triggerHook: "onLeave", offset: -150, duration: 180})
    .on('leave', () => {
      hideText('#content_5');
      $("#flag_6").removeClass("timeline__flag_red").text('2');
      $("#flag_6").parent().parent().removeClass("timeline__step_red");
    })
    .on('enter', () => {
      hideText('#content_6');
      $("#flag_6").addClass("timeline__flag_red").text('');
      $("#flag_6").parent().parent().addClass("timeline__step_red");
    })

    const flag7 = new ScrollMagic.Scene({triggerElement: "#flag_7", triggerHook: "onLeave", offset: -150, duration: 180})
    .on('leave', () => {
      hideText('#content_6');
      $("#flag_7").removeClass("timeline__flag_red").text('6');
      $("#flag_7").parent().parent().removeClass("timeline__step_red");
    })
    .on('enter', () => {
      hideText('#content_7');
      $("#flag_7").addClass("timeline__flag_red").text('');
      $("#flag_7").parent().parent().addClass("timeline__step_red");
    })

    const flag8 = new ScrollMagic.Scene({triggerElement: "#flag_8", triggerHook: "onLeave", offset: -150, duration: 168})
    .on('leave', () => {
      hideText('#content_9');
      $("#flag_8").removeClass("timeline__flag_red").text('2');
      $("#flag_8").parent().parent().removeClass("timeline__step_red");
    })
    .on('enter', () => {
      hideText('#content_8');
      $("#flag_8").addClass("timeline__flag_red").text('');
      $("#flag_8").parent().parent().addClass("timeline__step_red");
    })

    const flag9 = new ScrollMagic.Scene({triggerElement: "#flag_9", triggerHook: "onLeave", offset: -162, })
    .on('leave', () => {
      $("#flag_9").removeClass("timeline__flag_red").text('2');
      $("#flag_9").parent().parent().removeClass("timeline__step_red");
    })
    .on('enter', () => {
      hideText('#content_9');
      $("#flag_9").addClass("timeline__flag_red").text('');
      $("#flag_9").parent().parent().addClass("timeline__step_red");
    })

    const flag10 = new ScrollMagic.Scene({triggerElement: "#flag_10", triggerHook: "onLeave", offset: -162, })
    .on('leave', () => {
      hideText('#content_9');
    })
    .on('enter', () => {
      hideText('#content_10');
    })

  controller1.addScene([
    scene1,
    scene2,
    flag1,
    flag2,
    flag3,
    flag4,
    flag5,
    flag6,
    flag7,
    flag8,
    flag9,
    flag10
  ]);
});
