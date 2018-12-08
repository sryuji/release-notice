import RootState from '@/models/state'
import Session from '@/models/session'

// [ATTENTION] class objectを格納するとnuxtにserverでserializeできないって怒られる
// functionありのobjectは対象外の様子
export default (): RootState => ({
  session: {
    uid: null,
  },
  ssr: false,
})
