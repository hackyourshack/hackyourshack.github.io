import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export function initIconLibrary() {
  library.add(fab, fas);
}

export const Icon: React.FC<FontAwesomeIconProps> = (props) => <FontAwesomeIcon {...props} />;
