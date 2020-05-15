import React from 'react';
import ReactDOM from 'react-dom';
import '../../../public/assets/bootstrap/css/bootstrap.css';
import '../../../public/assets/helpers/animate.css';
import '../../../public/assets/helpers/backgrounds.css';
import'../../../public/assets/helpers/boilerplate.css';
import'../../../public/assets/helpers/border-radius.css';
import'../../../public/assets/helpers/grid.css';
import'../../../public/assets/helpers/page-transitions.css';
import'../../../public/assets/helpers/spacing.css';
import'../../../public/assets/helpers/typography.css';
import'../../../public/assets/helpers/utils.css';
import'../../../public/assets/helpers/colors.css';
import'../../../public/assets/elements/badges.css';
import'../../../public/assets/elements/buttons.css';
import'../../../public/assets/elements/content-box.css';
import'../../../public/assets/elements/dashboard-box.css';
import'../../../public/assets/elements/forms.css';
import'../../../public/assets/elements/images.css';
import'../../../public/assets/elements/info-box.css';
import'../../../public/assets/elements/invoice.css';
import'../../../public/assets/elements/loading-indicators.css';
import'../../../public/assets/elements/menus.css';
import'../../../public/assets/elements/panel-box.css';
import'../../../public/assets/elements/response-messages.css';
import'../../../public/assets/elements/responsive-tables.css';
import'../../../public/assets/elements/ribbon.css';
import'../../../public/assets/elements/social-box.css';
import'../../../public/assets/elements/tables.css';
import'../../../public/assets/elements/tile-box.css';
import'../../../public/assets/elements/timeline.css';
import'../../../public/assets/icons/fontawesome/fontawesome.css';
import'../../../public/assets/icons/linecons/linecons.css';
import'../../../public/assets/icons/spinnericon/spinnericon.css';
import'../../../public/assets/widgets/accordion-ui/accordion.css';
import'../../../public/assets/widgets/calendar/calendar.css';
import'../../../public/assets/widgets/carousel/carousel.css';
import'../../../public/assets/widgets/charts/justgage/justgage.css';
import'../../../public/assets/widgets/charts/morris/morris.css';
import'../../../public/assets/widgets/charts/piegage/piegage.css';
import'../../../public/assets/widgets/charts/xcharts/xcharts.css';
import'../../../public/assets/widgets/chosen/chosen.css';
import'../../../public/assets/widgets/colorpicker/colorpicker.css';
import'../../../public/assets/widgets/datatable/datatable.css';
import'../../../public/assets/widgets/datepicker/datepicker.css';
import'../../../public/assets/widgets/datepicker-ui/datepicker.css';
import'../../../public/assets/widgets/daterangepicker/daterangepicker.css';
import'../../../public/assets/widgets/dialog/dialog.css';
import'../../../public/assets/widgets/dropdown/dropdown.css';
import'../../../public/assets/widgets/dropzone/dropzone.css';
import'../../../public/assets/widgets/file-input/fileinput.css';
import'../../../public/assets/widgets/input-switch/inputswitch.css';
import'../../../public/assets/widgets/input-switch/inputswitch-alt.css';
import'../../../public/assets/widgets/ionrangeslider/ionrangeslider.css';
import'../../../public/assets/widgets/jcrop/jcrop.css';
import'../../../public/assets/widgets/jgrowl-notifications/jgrowl.css';
import'../../../public/assets/widgets/loading-bar/loadingbar.css';
import'../../../public/assets/widgets/maps/vector-maps/vectormaps.css';
import'../../../public/assets/widgets/markdown/markdown.css';
import'../../../public/assets/widgets/modal/modal.css';
import'../../../public/assets/widgets/multi-select/multiselect.css';
//import'../../../public/assets/widgets/multi-upload/fileupload.css';
import'../../../public/assets/widgets/nestable/nestable.css';
import'../../../public/assets/widgets/noty-notifications/noty.css';
import'../../../public/assets/widgets/popover/popover.css';
import'../../../public/assets/widgets/pretty-photo/prettyphoto.css';
import'../../../public/assets/widgets/progressbar/progressbar.css';
import'../../../public/assets/widgets/range-slider/rangeslider.css';
import'../../../public/assets/widgets/slidebars/slidebars.css';
import'../../../public/assets/widgets/slider-ui/slider.css';
import'../../../public/assets/widgets/summernote-wysiwyg/summernote-wysiwyg.css';
import'../../../public/assets/widgets/tabs-ui/tabs.css';
import'../../../public/assets/widgets/theme-switcher/themeswitcher.css';
import'../../../public/assets/widgets/timepicker/timepicker.css';
import'../../../public/assets/widgets/tocify/tocify.css';
import'../../../public/assets/widgets/tooltip/tooltip.css';
import'../../../public/assets/widgets/touchspin/touchspin.css';
import'../../../public/assets/widgets/uniform/uniform.css';
import'../../../public/assets/widgets/wizard/wizard.css';

import'../../../public/assets/snippets/chat.css';
import'../../../public/assets/snippets/files-box.css';
import'../../../public/assets/snippets/login-box.css';
import'../../../public/assets/snippets/notification-box.css';
import'../../../public/assets/snippets/progress-box.css';
import'../../../public/assets/snippets/todo.css';
import'../../../public/assets/snippets/user-profile.css';
import'../../../public/assets/snippets/mobile-navigation.css';
import'../../../public/assets/applications/mailbox.css';
import'../../../public/assets/themes/admin/layout.css';
import'../../../public/assets/themes/admin/color-schemes/default.css';
import'../../../public/assets/themes/components/default.css';
import'../../../public/assets/themes/components/border-radius.css';
import'../../../public/assets/helpers/responsive-elements.css';
import'../../../public/assets/helpers/admin-responsive.css';
// import'../../../public/assets/js-core/jquery-core..js';
// import'../../../public/assets/js-core/jquery-ui-core..js';
// import'../../../public/assets/js-core/jquery-ui-widget..js';
// import'../../../public/assets/js-core/jquery-ui-mouse..js';
// import'../../../public/assets/js-core/jquery-ui-position..js';
// import'../../../public/assets/js-core/modernizr..js';
// import'../../../public/assets/js-core/jquery-cookie..js';
function Login() {
    return (
            <div class="center-vertical">
                <div class="center-content row">
                    <div class="col-md-6 center-margin">
                        <h3 class="text-center pad15B font-gray text-transform-upr font-size-23">Login <span class="opacity-80">v1.0</span></h3>
                        <div class="content-box border-top border-red clearfix">
                            <div class="content-box-wrapper row">
                                <form  onSubmit={this.handleSubmit} id="login-validation" className="col-md-12">
                                    <div id="login-form">
                                        <div className="pad20A">
                                            <div className="form-group">
                                                <label for="exampleInputEmail1">Email address:</label>
                                                <div className="input-group input-group-lg">
                                                    <span className="input-group-addon addon-inside bg-white font-primary">
                                                        <i className="glyph-icon icon-envelope-o"></i>
                                                    </span>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value={this.state.value} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="exampleInputPassword1">Password:</label>
                                                <div className="input-group input-group-lg">
                                                    <span className="input-group-addon addon-inside bg-white font-primary">
                                                        <i className="glyph-icon icon-unlock-alt"></i>
                                                    </span>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.value} onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="row mrg15B">
                                                <div className="checkbox-primary col-md-10"  style={{ height: "20px" }}>
                                                    <label>
                                                        <input type="checkbox" id="loginCheckbox1" className="custom-checkbox" />
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-block btn-blue-alt">Login</button>
                                            </div>
                                    </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Login;
if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}