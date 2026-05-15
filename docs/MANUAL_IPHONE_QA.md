# Manual iPhone QA Loop

Run this loop after every merge to keep quality high on real iPhone hardware.

1. Pull latest main:
   - `git checkout main`
   - `git pull`
2. Install dependencies:
   - `npm install`
3. Run automated checks:
   - `npm run test`
4. Start Expo clean:
   - `npx expo start --clear`
5. Scan with Expo Go on iPhone.
6. Test affected flows end-to-end (child and parent surfaces touched by the sprint).
7. Record issues clearly:
   - repro steps
   - expected vs actual
   - screenshots/screen recordings
   - severity and owner

## QA Notes Template
- Build/branch:
- Device/iOS version:
- Flows tested:
- Pass/fail summary:
- Issues filed:
