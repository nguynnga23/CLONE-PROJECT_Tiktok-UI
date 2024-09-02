import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
// Viết classname dưới dạng -
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {}
                {}
            </div>
        </header>
    );
}

export default Header;
