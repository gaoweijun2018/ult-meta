import UltMeta, {Meta} from "./index";

class AppCodeMeta extends UltMeta {
    ACCOUNT = new Meta(1, '001');
    ZM = new Meta("lianxin-zm", "002")
    AM = new Meta("lianxin-am", 3)
    WERM = new Meta("lianxin-werm", "004")
    FR = new Meta("lianxin-fr", "005")
}

const APP_CODE_META = new AppCodeMeta();
APP_CODE_META.ACCOUNT.code;
APP_CODE_META.ACCOUNT.intro;
APP_CODE_META.getIntroByCode<string>('lianxin-accoun');
APP_CODE_META.getIntroByCode<number>('lianxin-zm');
