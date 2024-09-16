jQuery(document).ready(function () {
    let tabs = jQuery('div .tabs a');
    jQuery(tabs).click(function () {
        let content = this.hash
        console.log(content);
        console.log(this);
        // alert('clicked');
        jQuery(tabs).removeClass('active');
        jQuery(this).addClass('active');
        jQuery('#content').find('div').hide();
        jQuery(content).fadeIn(200);

    })
})