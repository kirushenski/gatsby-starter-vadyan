// Add custom matchers to Jest expect
import '@testing-library/jest-dom/extend-expect'

import { matchers } from 'jest-emotion'

expect.extend(matchers)
