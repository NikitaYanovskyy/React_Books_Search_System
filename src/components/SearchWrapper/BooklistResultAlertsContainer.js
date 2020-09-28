import {BooksFirstVisit, BooksUnfoundAlert} from './BooklistResultAlerts'
import {withProvideBooksLoaderState} from '../../hocs/withHoc'

export const BooksFirstVisitContainer = withProvideBooksLoaderState(BooksFirstVisit)
export const BooksUnfoundAlertContainer = withProvideBooksLoaderState(BooksUnfoundAlert)