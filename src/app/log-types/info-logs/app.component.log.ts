import { createInfoLog, LumberjackLog } from '@ngworker/lumberjack';

function createAppInfoLog(message: string): () => LumberjackLog {
  return createInfoLog(message, 'AppComponent');
}

export const HelloForrest = createAppInfoLog('HelloForrest');
