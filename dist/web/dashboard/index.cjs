Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
const require_themes_lulafi = require("../themes/lulafi.cjs");
let react_jsx_runtime = require("react/jsx-runtime");

//#region src/dashboard/theme.ts
function dashboardThemeStyle(mode) {
	const colors = require_themes_lulafi.semanticColors[mode];
	return {
		"--hcl-dashboard-surface": colors.surface.elevated,
		"--hcl-dashboard-text": colors.content.primary,
		"--hcl-dashboard-muted": colors.content.secondary,
		"--hcl-dashboard-border": colors.stroke.default,
		"--hcl-dashboard-soft": colors.surface.strong,
		"--hcl-dashboard-hover-surface": colors.surface.interactive,
		"--hcl-dashboard-hover-border": colors.stroke.selected,
		"--hcl-dashboard-accent": colors.surface.interactiveStrong,
		"--hcl-dashboard-danger-surface": colors.status.danger.surface,
		"--hcl-dashboard-danger-text": colors.status.danger.content,
		"--hcl-dashboard-focus": colors.stroke.focus
	};
}

//#endregion
//#region src/dashboard/DashboardCard.tsx
function DashboardCard({ children, mode }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("article", {
		className: "hcl-dashboard-card",
		style: dashboardThemeStyle(mode),
		children
	});
}

//#endregion
//#region src/dashboard/DashboardLink.tsx
function DashboardLink({ href, children, className, renderLink, ariaLabel }) {
	const props = {
		href,
		children,
		className,
		ariaLabel
	};
	if (renderLink) return renderLink(props);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("a", {
		href,
		className,
		"aria-label": ariaLabel,
		children
	});
}

//#endregion
//#region src/dashboard/DashboardActivityCard.tsx
function DashboardActivityCard({ title = "Activity", subtitle = "Product usage in this period.", rows, mode = "light", renderLink }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(DashboardCard, {
		mode,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "hcl-dashboard-card__heading",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
				className: "hcl-dashboard-card__title",
				children: title
			}), subtitle && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				className: "hcl-dashboard-card__subtitle",
				children: subtitle
			})]
		}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "hcl-dashboard-activity__rows",
			children: rows.map((row) => {
				const content = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "hcl-dashboard-activity__row",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "hcl-dashboard-activity__label",
						children: row.label
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "hcl-dashboard-activity__value",
						children: row.value.toLocaleString()
					})]
				});
				return row.href ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DashboardLink, {
					href: row.href,
					className: "hcl-dashboard-link hcl-dashboard-row-link",
					renderLink,
					ariaLabel: `${row.label}: ${row.value.toLocaleString()}`,
					children: content
				}, row.label) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "hcl-dashboard-activity__item",
					children: content
				}, row.label);
			})
		})]
	});
}

//#endregion
//#region src/dashboard/DashboardBreakdownCard.tsx
function formatShare(percent) {
	return percent > 0 && percent < 1 ? "<1%" : `${Math.round(percent)}%`;
}
function DashboardBreakdownCard({ title, subtitle, rows, emptyText, mode = "light", renderLink }) {
	const total = rows.reduce((sum, row) => sum + row.count, 0);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(DashboardCard, {
		mode,
		children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "hcl-dashboard-card__heading",
			children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
				className: "hcl-dashboard-card__title",
				children: title
			}), subtitle && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				className: "hcl-dashboard-card__subtitle",
				children: subtitle
			})]
		}), total === 0 ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
			className: "hcl-dashboard-empty",
			children: emptyText
		}) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
			className: "hcl-dashboard-breakdown__rows",
			children: rows.map((row) => {
				const percent = row.count / total * 100;
				const content = /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "hcl-dashboard-breakdown__row",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
						className: "hcl-dashboard-breakdown__labels",
						children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: row.label }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
							className: "hcl-dashboard-breakdown__count",
							children: [
								row.count.toLocaleString(),
								" (",
								formatShare(percent),
								")"
							]
						})]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "hcl-dashboard-breakdown__track",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "hcl-dashboard-breakdown__fill",
							style: { "--hcl-dashboard-row-width": `${percent}%` }
						})
					})]
				});
				return row.href ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DashboardLink, {
					href: row.href,
					className: "hcl-dashboard-link hcl-dashboard-row-link",
					renderLink,
					ariaLabel: `${row.label}: ${row.count.toLocaleString()} (${formatShare(percent)})`,
					children: content
				}, row.label) : /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: content }, row.label);
			})
		})]
	});
}

//#endregion
//#region src/dashboard/DashboardRecentActivityCard.tsx
function DashboardRecentActivityCard({ items, loading, errorMessage, loadingText = "Loading activity…", emptyText = "No activity recorded yet.", action, mode = "light" }) {
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(DashboardCard, {
		mode,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "hcl-dashboard-card__heading hcl-dashboard-card__heading--action",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
					className: "hcl-dashboard-card__title",
					children: "Recent activity"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "hcl-dashboard-card__subtitle",
					children: "Latest entries in the audit trail."
				})] }), action && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "hcl-dashboard-card__action",
					children: action
				})]
			}),
			errorMessage && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				className: "hcl-dashboard-error",
				role: "alert",
				children: errorMessage
			}),
			loading && items.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				className: "hcl-dashboard-empty",
				role: "status",
				children: loadingText
			}),
			!loading && !errorMessage && items.length === 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
				className: "hcl-dashboard-empty",
				children: emptyText
			}),
			items.length > 0 && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "hcl-dashboard-recent__rows",
				children: items.map((item) => /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "hcl-dashboard-recent__row",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("p", {
						className: "hcl-dashboard-recent__description",
						children: [
							item.actor,
							" · ",
							/* @__PURE__ */ (0, react_jsx_runtime.jsx)("strong", { children: item.action }),
							item.entity && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("span", {
								className: "hcl-dashboard-recent__entity",
								children: [" ", item.entity]
							})
						]
					}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("time", {
						className: "hcl-dashboard-recent__time",
						dateTime: item.time,
						title: item.timeTitle,
						children: item.timeLabel
					})]
				}, item.id))
			})
		]
	});
}

//#endregion
//#region src/dashboard/DashboardSignupsChart.tsx
function DashboardSignupsChart({ signups, action, mode = "light" }) {
	const total = signups.reduce((sum, day) => sum + day.count, 0);
	const peak = signups.reduce((best, day) => day.count > best.count ? day : best, signups[0]);
	const first = signups[0];
	const last = signups.reduce((_previous, day) => day, signups[0]);
	const peakLabel = `${peak.dateLabel} (${peak.count.toLocaleString()})`;
	const chartLabel = `Daily signups from ${first.dateLabel} to ${last.dateLabel}: ${total.toLocaleString()} in total, peaking at ${peak.count.toLocaleString()} on ${peak.dateLabel}.`;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(DashboardCard, {
		mode,
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "hcl-dashboard-card__heading hcl-dashboard-card__heading--action",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
					className: "hcl-dashboard-card__title",
					children: "Signups"
				}), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "hcl-dashboard-card__subtitle",
					children: total === 0 ? "No new users in this period." : `${total.toLocaleString()} new users · busiest day ${peakLabel}`
				})] }), action && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
					className: "hcl-dashboard-card__action",
					children: action
				})]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "hcl-dashboard-signups-chart",
				role: "img",
				"aria-label": chartLabel,
				children: signups.map((day) => {
					const barStyle = {
						"--hcl-dashboard-bar-height": `${peak.count ? day.count / peak.count * 100 : 0}%`,
						"--hcl-dashboard-bar-min-height": day.count > 0 ? "2px" : "0"
					};
					return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
						className: "hcl-dashboard-signups-chart__slot",
						title: day.tooltipLabel,
						children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
							className: "hcl-dashboard-signups-chart__bar",
							style: barStyle
						})
					}, day.date);
				})
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "hcl-dashboard-signups-chart__dates",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: first.dateLabel }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: last.dateLabel })]
			})
		]
	});
}

//#endregion
//#region src/dashboard/DashboardStatCard.tsx
function DashboardStatCard({ title, value, caption, href, mode = "light", renderLink }) {
	const card = /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DashboardCard, {
		mode,
		children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
			className: "hcl-dashboard-stat",
			children: [
				/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
					className: "hcl-dashboard-stat__topline",
					children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("h2", {
						className: "hcl-dashboard-stat__title",
						children: title
					}), href && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", {
						className: "hcl-dashboard-stat__arrow",
						"aria-hidden": "true",
						children: "›"
					})]
				}),
				/* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "hcl-dashboard-stat__value",
					children: value.toLocaleString()
				}),
				caption && /* @__PURE__ */ (0, react_jsx_runtime.jsx)("p", {
					className: "hcl-dashboard-stat__caption",
					children: caption
				})
			]
		})
	});
	if (!href) return card;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DashboardLink, {
		href,
		className: "hcl-dashboard-link hcl-dashboard-stat-link",
		renderLink,
		children: card
	});
}

//#endregion
exports.DashboardActivityCard = DashboardActivityCard;
exports.DashboardBreakdownCard = DashboardBreakdownCard;
exports.DashboardRecentActivityCard = DashboardRecentActivityCard;
exports.DashboardSignupsChart = DashboardSignupsChart;
exports.DashboardStatCard = DashboardStatCard;