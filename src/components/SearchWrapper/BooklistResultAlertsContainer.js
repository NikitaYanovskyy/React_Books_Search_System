import BooklistResultAlert from './BooklistResultAlert'
import {withProvideBooksLoaderState} from '../../hocs/withHoc'

export const BooklistResultAlertContainer = withProvideBooksLoaderState(BooklistResultAlert)
