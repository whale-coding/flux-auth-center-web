# flux-auth-center-web

基于 Vue 3 + Element Plus + TypeScript + Vite 的认证中心管理后台，使用 pnpm workspace 组织的 monorepo。

## 环境要求

- Node.js `^20.19.0` / `^22.13.0` / `>=24.0.0`（`.node-version` 为 `22.19.0`）
- pnpm `>= 9.5.0`（`packageManager` 为 `9.15.3`）

## 快速开始

```bash
pnpm i            # 安装依赖（会通过 prepare 钩子初始化 husky）
pnpm dev:admin    # 管理后台，http://localhost:4000
pnpm dev:docs     # 文档站，http://localhost:4002
```

管理后台开发服务器把 `/api` 代理到 `http://127.0.0.1:8000`，见 `apps/admin/vite.config.ts`。

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `pnpm dev:admin` | 启动管理后台（`--mode base`） |
| `pnpm build:admin` | 生产构建（`--mode pro`，输出 `dist-pro`） |
| `pnpm build:admin:dev` / `pnpm build:admin:test` | 对应环境的构建 |
| `pnpm preview:admin` | 预览生产构建 |
| `pnpm dev:docs` / `pnpm build:docs` / `pnpm preview:docs` | 文档站开发 / 构建 / 预览 |
| `pnpm typecheck` | 全仓类型检查（admin + 各 packages） |
| `pnpm lint` / `pnpm lint:fix` | oxlint 检查 / 自动修复 |
| `pnpm style:check` / `pnpm lint:style` | stylelint 检查 / 自动修复 |
| `pnpm format:check` / `pnpm lint:format` | prettier 检查 / 格式化 |
| `pnpm clean:admin` | 清理 admin 的构建产物与缓存 |

## 目录结构

```
apps/
  admin/            # 管理后台（@vea/admin）：Vue 3 + Element Plus + Vite + UnoCSS + Pinia
  docs/             # 文档站（@vea/docs）：VitePress
packages/
  components/       # @vea/components  公共组件
  hooks/            # @vea/hooks       公共 hooks
  request/          # @vea/request     与 UI 无关的 axios 请求客户端
  styles/           # @vea/styles      公共样式
```

各 package 之间通过 `workspace:*` 互相引用，公共依赖版本统一在 `pnpm-workspace.yaml` 的 `catalog` 中维护。

## 代码规范

- **提交信息**：遵循 [Conventional Commits](https://www.conventionalcommits.org/)，由 commitlint 在 `commit-msg` 阶段校验，例如：
  - `feat(login): 支持账号密码登录`
  - `fix(request): 修复 401 后未跳转登录页`
- **pre-commit**：执行 `pnpm typecheck:admin` 与 lint-staged（oxlint / prettier / stylelint）。
- **格式化与 Lint**：prettier + oxlint + stylelint，配置见根目录各 `.*rc.json`。

## 环境变量

管理后台的环境变量放在 `apps/admin/.env.*`：

- `.env.base`：公共配置（接口前缀、打包路径、标题、mock 开关）
- `.env.dev` / `.env.test` / `.env.pro`：对应环境的覆盖项

当前这些文件只包含非敏感的公共配置，可以正常提交；如需本地私有配置或密钥，请放到 `.env.local`（已被 `.gitignore` 忽略）。
