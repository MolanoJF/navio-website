## File Path Rules (Workaround for Claude Code v1.0.111 Bug)
- When reading or editing a file, **ALWAYS use relative paths.**
- Example: `./src/components/Component.tsx` ✅
- **DO NOT use absolute paths.**
- Example: `C:/Users/user/project/src/components/Component.tsx` ❌
- Reason: This is a workaround for a known bug in Claude Code v1.0.111 (GitHub Issue)