import PropTypes from '../_util/vue-types'

function IDialogPropTypes () {
  return {
    keyboard: PropTypes.bool,
    mask: PropTypes.bool,
    afterClose: PropTypes.func,
    // onClose: PropTypes. (e: SyntheticEvent<HTMLDivElement>) =>any,
    closable: PropTypes.bool,
    maskClosable: PropTypes.bool,
    visible: PropTypes.bool,
    destroyOnClose: PropTypes.bool,
    mousePosition: PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }).loose,
    title: PropTypes.any,
    footer: PropTypes.any,
    transitionName: PropTypes.string,
    maskTransitionName: PropTypes.string,
    animation: PropTypes.any,
    maskAnimation: PropTypes.any,
    wrapStyle: PropTypes.object,
    bodyStyle: PropTypes.object,
    maskStyle: PropTypes.object,
    prefixCls: PropTypes.string,
    wrapClassName: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    zIndex: PropTypes.number,
    bodyProps: PropTypes.any,
    maskProps: PropTypes.any,
    wrapProps: PropTypes.any,
    getContainer: PropTypes.func,
  }
}

export default IDialogPropTypes